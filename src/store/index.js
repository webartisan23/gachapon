import Vue from "vue";
import Vuex from "vuex";
import { ethers } from "ethers";
import axios from 'axios'
import Cookies from 'js-cookie'

import { supportNetworkId, BASE_URL } from "@/const";

Vue.use(Vuex);

/* eslint-disable */
export default new Vuex.Store({
  state: {
    walletAddress: null,
    provider: !window.ethereum
        ? new ethers.providers.getDefaultProvider()
        : new ethers.providers.Web3Provider(window.ethereum),

    /** User Information */
    accessToken: Cookies.get('accessToken'),
    user: null,    
  },
  getters: {
    walletAddress: state => { return state.walletAddress; },
    provider:      state => { return state.provider; },
    user:          state => { return state.user; },
    token:         state => { return state.accessToken; },
    isLoggedIn:    state => { return state.accessToken ? true:false; },
    isArtist:      state => { return true; }, //state.user && !state.user.isAdmin },
    isAdmin:       state => { return state.user && state.user.isAdmin },
  },
  mutations: {
    setAddress(state, address) {
      state.walletAddress = address;
      Cookies.set("address", address, { expires: 365 })
    },
    setToken(state, token) {
      state.accessToken = token;
      Cookies.set("accessToken", token, { expires: 365 })
    },
    setUser(state, user) {
      state.user = user;
    },
    logout (state) {
      state.token = null;
      state.user = null;
      state.walletAddress = null;

      Cookies.remove("accessToken")
      Cookies.remove("address")
    }
  },
  actions: {
    async connectWallet(context) {
      if (window.ethereum){
        const { chainId } = await this.state.provider.getNetwork()
        if(chainId !== supportNetworkId) {
           return -1;
        }

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        if(accounts && accounts.length) {
          context.commit("setAddress", accounts[0]);
          // context.dispatch("checkArtist")
          return 1;
        }else{
          return 0;
        }

      }
      return 0;
    },
    disconnectWallet(context) {
      context.commit("logout");
    },
    async checkArtist(context) {
      if(!this.state.walletAddress) return;

      try {
        const { data } = await axios.get(`${BASE_URL}/api/artist/check?address=${this.state.walletAddress}`)
        context.commit("setUser", data)
      } catch (e) {
        console.log("Check Artist Error", e)
        context.commit("setUser", null)
      }
    },
    async login(context) {
      if(!context.state.user) return;

      const signer = context.state.provider.getSigner();
      const address = context.state.walletAddress;
      const nonce = context.state.user.nonce;
      try {
        const signature = await signer.signMessage(
          `I am signing my one-time nonce: ${nonce}`
        );
        
        if(signature) {
          
            const { data } = await axios.post(`${BASE_URL}/api/login`, {address: address, signature: signature})
            const token = data.token;
            if(token) {
              context.commit("setToken", token);

              const { data } = await axios.get(`${BASE_URL}/api/artist`)
              context.commit('setUser', data);

              return true;
            }
        }
      } catch (err) {
        throw new Error(
          'authenticate error ' + err
        );
      }

    }
  },
});
