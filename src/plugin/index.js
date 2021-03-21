import Vue from "vue";
import router from "../router";
import store from "../store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style/_main.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { VLazyImagePlugin } from "v-lazy-image";

import axios from 'axios'

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.use(Toast, {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
});
Vue.use(VLazyImagePlugin);

/* eslint-disable */
axios.interceptors.request.use(request => {
  const token = store.getters['token']
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }
  
  return request
})

axios.interceptors.response.use(response => {

  const { status, statusText, data } = response;

  if(status === 200){
    //
  }
  return Promise.resolve(response);
}, error => {
  const { status, statusText, data } = error.response

  if (status >= 500) {
    //
  }

  else if (status === 401) {
    if(store.getters['user']){
      this.$toast.error("Access Token Expired"); 

      store.commit('logout')
      router.push({ name: 'Home' })
    }
  }
  else {
    if(status !== 422){
        //
    }
    else if(status === 403){
      router.push({ name: 'Home'});
    }
    else if(status === 404){
        //
    }
  }

  return Promise.reject(error)
})
