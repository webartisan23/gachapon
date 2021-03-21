<template>
  <div class="taikyaeth-layout">
    <div>
      <div class="approve-stake-layout">
        <div class="title">STAKE TAIYAKI/ETH - EARN TAIYAKI!</div>
        <div class="operate-form">
          <div class="lp-amount">
            <div class="lp-amount-title">
              LP AMOUNT:
            </div>
            <input class="lp-amount-input" placeholder="Type In" v-model="stakeAmount"/>
          </div>
          <div class="submit-layout">
            <div class="custom-button-3 text-center" :class="!walletAddress || pendingAction ? 'disabled':''"  @click="approveOrStake()">
              <template v-if="showApproveBtn">
                <pulse-loader :loading="pendingApprove" color="white" size="10px"></pulse-loader>
                <div v-show="!pendingApprove">
                  APPROVE
                  <br />
                  STAKE
                </div>  
              </template>
              <template v-else>
                STAKE
              </template>
            </div>
            <div class="custom-button-3 align-items-center" :class="!walletAddress || pendingAction ? 'disabled':''" @click="redeem()">
              REDEEM
            </div>
            <div class="custom-button-3 align-items-center" :class="!walletAddress || pendingAction ? 'disabled':''" @click="unstake()">
              UNSTAKE
            </div>
          </div>
          <div class="current_description">
            <p>
              You currently have
              <span class="value">{{ toFixedString(toEth(staked)) }}</span> staked
            </p>
            <p>
              TAIYAKI caught:
              <span class="value">{{toFixedString(toEth(reward))}}</span> TAIYAKI
            </p>
          </div>
        </div>
      </div>
      <div class="max-min-lp">
        <span>Minimum LP: 1 | Maximum LP: 10</span>
      </div>
    </div>
    <div class="image-layout">
      <img src="../assets/images/gawr-gura.webp" />
    </div>
    <div class="cat-layout">
      <img
        src="../assets/images/CAT2.png"
        style="width: 100px;"
        class="cat-image"
      />
    </div>
  </div>
</template>

<script>
import web3 from 'web3';
import { ethers } from "ethers";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { mapGetters } from 'vuex'
import { contractAddress, supportNetworkId } from "@/const";
import LPTokenABI from "@/assets/ABI/LPToken.json";
import LPABI from "@/assets/ABI/TaiyakiETHLP.json";

export default {
  name: "TaikyakEth",
  components: {
    PulseLoader
  },
  mounted() {
    this.getStakedData();
  },
  data: () => ({
    staked: 0,
    reward: 0,
    balance: 0,
    approved: 0,
    pendingApprove: false,
    stakeAmount: 0,
    pendingAction: false,
  }),
  computed: {
    ...mapGetters([
      'walletAddress',
      'provider'
    ]),
    showApproveBtn() {
      return Number(this.approved) === 0 || Number(this.approved) < Number(this.stakeAmount);
    }
  },
  watch: {
    walletAddress() {
      this.getStakedData();
    } 
  },
  methods: {
    toEth(amount) {
      return web3.utils.fromWei(String(amount), "ether");
    },
    toWei(amount) {
      return web3.utils.toWei(String(amount), "ether");
    },
    toFixedString(amount, decimal = 4) {
      return parseFloat(amount)?.toFixed(decimal)
    },
    async getStakedData() {
      if (this.walletAddress) {
        // check network current connected
        const { chainId } = await this.provider.getNetwork()
        if(chainId !== supportNetworkId) {
           this.$toast.error("Connected To Not Supported Network"); 
           return;
        }

        const pool = new ethers.Contract(contractAddress.Pool, LPABI, this.provider);
        const lpToken = new ethers.Contract(contractAddress.LPToken, LPTokenABI, this.provider);
        const [staked, reward, balance, approved] = await Promise.all([
          pool.balanceOf(this.walletAddress),
          pool.earned(this.walletAddress),
          lpToken.balanceOf(this.walletAddress),
          lpToken.allowance(this.walletAddress, contractAddress.Pool)
        ]);

        this.staked = staked.toString();
        this.reward = reward.toString();
        this.balance = balance.toString();
        this.approved = approved.toString();
      }
    },
    async approveOrStake() {
      if(this.pendingAction) return;
      if (!this.walletAddress) {
        this.$toast.warning("Please connect to metamask to stake");
        return;
      }
      if (this.showApproveBtn) {
        this.approve();
      }else {
        this.stake();
      }
    },
    async approve() {
      const signer = this.provider.getSigner();
      const lpToken = new ethers.Contract(contractAddress.LPToken, LPTokenABI, signer);
      const tx = await lpToken.approve(contractAddress.Pool, "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
      this.pendingApprove = true;
      this.pendingAction = true;
      try {
        await tx.wait(2);    
        this.$toast.success("Approved Taiyaki-ETH LP token to staking"); 
        this.pendingApprove = false;
        this.pendingAction = false;
        this.getStakedData();
      } catch (e) {
        console.log("error", e)
        this.pendingApprove = false;
        this.pendingAction = false;
      }
    },
    async stake() {
      if(this.pendingAction) return;
      if (!this.walletAddress) {
        this.$toast.warning("Please connect to metamask to stake");
        return;
      }
      if(Number(this.stakeAmount) <= 0) {
        this.$toast.error("Please Input valid LP Token Amount to stake."); 
        return;
      }
      let availableAmount = Math.min((10 - this.toEth(this.staked)), this.toEth(this.balance));
      if(availableAmount <= 0) {
        this.$toast.error("Your staking amount has been reached to Maximum linmit (10LP)");
        return; 
      }
      if(Number(this.stakeAmount) > availableAmount) {
        this.$toast.error(`You can stake only ${this.toFixedString(availableAmount)} LP for now`);
        return;
      }

      const signer = this.provider.getSigner();
      const lpToken = new ethers.Contract(contractAddress.LPToken, LPTokenABI, signer);
      const pool = new ethers.Contract(contractAddress.Pool, LPABI, signer);
      const amount = web3.utils.toWei(this.stakeAmount, 'ether')
      const allowance = await lpToken.allowance(this.walletAddress, contractAddress.Pool);
      if (allowance.lt(amount)) await lpToken.approve(contractAddress.Pool, "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");

      this.pendingAction = true;
      const tx = await pool.stake(amount);
      try {
        await tx.wait(1);    
        this.$toast.success(`Successfully Staked ${this.stakeAmount} LP`); 
        await this.getStakedData();
        this.pendingAction = false;
        this.stakeAmount = '';
      }catch(e) {
        console.log(e)
        this.pendingAction = false;
      }
    },
    async redeem() {
      if(this.pendingAction) return;
      if (!this.walletAddress) {
        this.$toast.warning("Please connect to metamask to redeem");
        return;
      }
      if(Number(this.stakeAmount) <= 0) {
        this.$toast.error("Please Input valid TAIYAKI Amount to redeem."); 
        return;
      }
      if(Number(this.stakeAmount) > this.toEth(this.reward)) {
        this.$toast.error(`Redeem amount is bigger than reward`);
        return;
      }

      const signer = this.provider.getSigner();
      const pool = new ethers.Contract(contractAddress.Pool, LPABI, signer);
      const amount = web3.utils.toWei(this.stakeAmount, 'ether')
      
      this.pendingAction = true;
      const tx = await pool.redeem(amount);
      try {
        await tx.wait(1);    
        this.$toast.success(`Successfully Redeemed ${this.stakeAmount} TAIYAKI`); 
        await this.getStakedData();
        this.pendingAction = false;
        this.stakeAmount = '';
      }catch(e) {
        console.log(e)
        this.pendingAction = false;
      }
    },
    async unstake() {
      if(this.pendingAction) return;
      if (!this.walletAddress) {
        this.$toast.warning("Please connect to metamask to unstake");
        return;
      }
      if(Number(this.stakeAmount) <= 0) {
        this.$toast.error("Please Input valid LP Token Amount to unstake."); 
        return;
      }
      if(Number(this.stakeAmount) > this.toEth(this.staked)) {
        this.$toast.error(`Unstake amount is bigger than balance`);
        return;
      }

      const signer = this.provider.getSigner();
      const pool = new ethers.Contract(contractAddress.Pool, LPABI, signer);
      const amount = web3.utils.toWei(this.stakeAmount, 'ether')
      
      this.pendingAction = true;
      const tx = await pool.withdraw(amount);
      try {
        await tx.wait(1);    
        this.$toast.success(`Successfully Unstaked ${this.stakeAmount} LP`); 
        await this.getStakedData();
        this.pendingAction = false;
        this.stakeAmount = '';
      }catch(e) {
        console.log(e)
        this.pendingAction = false;
      }
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.taikyaeth-layout {
  display: flex;
  justify-content: center;
  margin: 20px auto;
  position: relative;
  padding-bottom: 60px;
  .image-layout {
    z-index: 111;
    margin-left: -120px;
    img {
      height: 700px;
      display: block;
    }
  }
  .approve-stake-layout {
    height: 500px;
    margin: 0px auto;
    padding: 50px 80px;
    border-top-left-radius: 57px;
    border-top-right-radius: 57px;
    filter: drop-shadow(0px 3px 11.5px #000000);
    background-image: linear-gradient(180deg, #3c1713 0%, #000000 100%);
    border: 4px solid $main-color;
    .title {
      color: $main-color;
      font-size: 25px;
      font-family: "BLAME";
      margin-bottom: 20px;
      text-align: center;
    }
    .operate-form {
      font-size: 20px;
      color: $main-color;
      font-family: "Togalite-Bold";
      .lp-amount {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .lp-amount-title {
          margin-right: 30px;
        }
        .lp-amount-input {
          border: 1.5px solid $main-color;
          border-radius: 5px;
          height: 50px;
          margin: 10px 10px;
          padding: 0 5px;
        }
      }
      .submit-layout {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        .custom-button-2 {
          font-size: 20px;
          color: $main-color;
          font-family: "Togalite-Bold";
        }
      }
      .current_description {
        margin-top: 30px;
        text-align: center;
        color: $main-color;
        font-family: "Togalite-Regular";

        span.value {
          color: white; font-size: 22px;
        }
      }
    }
  }
  .max-min-lp {
    border: solid 1.5px $main-color;
    border-radius: 20px;
    color: $main-color;
    font-size: 17px;
    font-family: "Togalite-Regular";
    height: 60px;
    text-align: center;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    margin: -20px 150px 0px 150px;
  }
  @media only screen and (max-width: 1020px) {
    .image-layout {
      margin-left: 0px;
      img {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 780px) {
    .approve-stake-layout {
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      .title {
        font-size: 20px;
      }
      .operate-form {
        font-size: 18px;
      }
    }
    .max-min-lp {
      margin: -20px 100px 0px 100px;
    }
  }

  @media only screen and (max-width: 620px) {
    .approve-stake-layout {
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      margin: 0px 30px;
      padding: 50px 30px;
      .title {
        font-size: 16px;
      }
      .operate-form {
        font-size: 14px;
      }
    }
    .max-min-lp {
      margin: -20px 80px 0px 80px;
    }
  }

  @media only screen and (max-width: 450px) {
    .approve-stake-layout {
      margin: 0px 30px;
      padding: 50px 10px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      .title {
        font-size: 14px;
      }
      .operate-form {
        font-size: 12px;
      }
    }
    .max-min-lp {
      margin: -20px 30px 0px 30px;
    }
  }
}
</style>
