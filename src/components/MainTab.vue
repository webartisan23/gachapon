<template>
  <div class="d-flex justify-content-center main-tab">
    <div class="d-flex">
      <div class="left-radius-button" @click="linkToArtistPage" :class="$route.name =='ArtistTab' ? 'active' : ''">TUTORIAL</div>
      <div class="custom-button-2" @click="linkToTaiyakPage" :class="$route.name =='TaiyakEth' ? 'active' : ''">STAKE</div>
    </div>
    <div class="gachapon-title" @click="linkToHome">Gachapon!</div>
    <div class="d-flex">
      <div class="custom-button-2" :class="$route.name =='Topup' ? 'active' : ''">TOP UP</div>
      <div class="right-radius-button" @click="linkToCollectionPage" :class="$route.name =='Collection' ? 'active' : ''">
        COLLECTION
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainTab",
  components: {},
  data: () => ({}),
  created() {},
  computed: {},
  methods: {
    linkToTaiyakPage() {
      this.$router.push("/taiyak-eth").catch(() => {});
    },
    linkToCollectionPage() {
      this.$router.push("/collection").catch(() => {});
    },
    linkToGachaponPage() {
      this.$router.push("/gachapon").catch(() => {});
    },
    linkToArtistPage() {
      this.$router.push("/artist-tab").catch(() => {});
    },
    linkToHome() {
      this.$router.push("/home").catch(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
.main-tab {
  margin: 50px 30px;
  .active {
    color: white !important;
  }
  .gachapon-title {
    font-size: 64px;
    color: white;
    font-family: "BLAME";
    padding: 0px 20px;
    transform: rotate(5deg);
    cursor: pointer;
    display: block;
  }

  .left-radius-button {
    padding: 20px 30px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-image: linear-gradient(180deg, #240906 0%, #000000 100%);
    border: 1.5px solid #260000;
    color: $main-color;
    font-family: "BLAME";
    font-size: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }

  .right-radius-button {
    padding: 20px 30px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: linear-gradient(180deg, #240906 0%, #000000 100%);
    border: 1.5px solid #260000;
    color: $main-color;
    font-family: "BLAME";
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }

  @media only screen and (max-width: 1570px) {
    .custom-button-2,
    .right-radius-button,
    .left-radius-button {
      font-size: 30px;
    }

    .gachapon-title {
      font-size: 55px;
    }
  }

  @media only screen and (max-width: 1350px) {
    .custom-button-2,
    .right-radius-button,
    .left-radius-button {
      font-size: 20px;
    }

    .gachapon-title {
      font-size: 40px;
    }
  }

  @media only screen and (max-width: 1040px) {
    .custom-button-2,
    .right-radius-button,
    .left-radius-button {
      font-size: 15px;
      white-space: nowrap;
    }

    .gachapon-title {
      font-size: 30px;
    }
  }

  @media (max-width: 991px) {
    .gachapon-title {
      display: none;
    }

    .custom-button-2,
    .right-radius-button,
    .left-radius-button {
      font-size: 14px;
      padding: 15px 25px;
    }
  }

  @media (max-width: 500px) {
    .custom-button-2,
    .right-radius-button,
    .left-radius-button {
      font-size: 10px;
      padding: 10px 15px;
    }
  }
}
</style>
