<template>
  <div id="app" class="main-container">
    <Navbar></Navbar>
    <MainTab></MainTab>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/navbar";
import MainTab from "./components/MainTab";
import Cookies from 'js-cookie'

export default {
  name: "app",
  components: {
    Navbar,
    MainTab,
  },
  data: () => ({}),
  methods: {},
  mounted() {
    const prevAddress = Cookies.get("address");
    if(prevAddress) {
       this.$store.dispatch('connectWallet').then(result => {
        if(!result) {
          Cookies.remove("address")
        }
      });
    }

    // this.$store.dispatch('checkArtist')
  },
  computed: {},
};
</script>
<style lang="scss"></style>
