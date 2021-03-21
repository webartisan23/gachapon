<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="dropdown">
        <a
          class=" menu-toggle custom-button-1"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img src="../assets/images/menu.png" />
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#">Telegram</a>
          <a class="dropdown-item" href="#">Discord</a>
          <a class="dropdown-item" href="#">Medium</a>
          <a class="dropdown-item" href="#">Twitter</a>
          <a class="dropdown-item" href="#">Opensea</a>
          <a class="dropdown-item" href="/artist-tab">Tutorial</a>
        </div>
      </div>
      <div class="gachapon-title navbar-toggler" @click="linkToHome">
        Gachapon!
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fa fa-bars" style="color: #190705"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto pl-lg-5">
          <li class="nav-item active">
            <div class="custom-button-1" :class="activeClass('Home')" @click="linkToHome">Home</div>
          </li>
          <li class="nav-item">
            <div class="custom-button-1" @click="linkToFishPage">
              Fish!
            </div>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item" v-if="isArtist">
            <div class="custom-button-1" :class="activeClass('ArtistPanel')" @click="linkToArtistPanel">
              Artist Panel
            </div>
          </li>
          <li class="nav-item">
            <div class="custom-button-1" :class="activeClass('ArtistTab')" @click="linkToArtistPage">
              ARTIST? Click here
            </div>
          </li>
          <li class="nav-item">
            <div class="custom-button-1 " @click="connectWallet" v-if="!walletAddress">
              Connect
            </div>
            <div class="wallet-input" @click="disconnectWallet" v-else>
              {{ walletAddress }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Navbar",
  props: {},
  methods: {
    linkToHome() {
      this.$router.push("/home");
    },
    linkToTaiyakPage() {
      this.$router.push("/taiyak-eth").catch(() => {});
    },
    linkToFishPage() {
      window.location.href = "https://fish.chonker.finance";
    },
    linkToArtistPanel() {
      this.$router.push("/artist-panel").catch(() => {});
    },
    linkToArtistPage() {
      this.$router.push("/artist-tab").catch(() => {});
    },
    connectWallet() {
      this.$store.dispatch('connectWallet').then(result => {
        if(result === 0) {
          this.$toast.error("Please install Metamask first");
        }else if(result === -1) {
          this.$toast.error("Connected to unsupported network");
        }
      });
    },
    disconnectWallet() {
      this.$store.dispatch('disconnectWallet')
    },
    activeClass(routeName) {
      return (this.currentRouteName === routeName) ? 'active' : '';
    }
  },
  computed: {
    ...mapGetters([
      'isArtist'
    ]),

    walletAddress() {
      const address = this.$store.state.walletAddress;
      if (address) {
        return `${address.substring(0, 7)}...${address.substring(37)}`;
      }
      return null;
    },
    currentRouteName() {
        return this.$route.name;
    }
  }
};
</script>
<style lang="scss">
.navbar {
  // height: $navbar-height;
  padding: .2rem 1rem !important;
  background-color: $main-color !important;
  .dropdown {
    .menu-toggle {
      color: $main-color;
      background-color: $background-color;
      font-size: 20px;
      font-weight: 900;
      &:hover {
        text-decoration: none;
      }
    }
    .dropdown-menu {
      background-image: linear-gradient(180deg, #331310 0%, #000000 100%);
      .dropdown-item {
        color: $main-color;
        text-align: center;
        margin: 3px 0px;
        font-family: "Togalite-Regular";
        &:hover {
          background-color: $main-color;
          color: $background-color;
        }
      }
    }
  }
  .custom-button-1 {
    height: 46px;
  }

  .gachapon-title {
    font-size: 30px;
    color: white;
    font-family: "BLAME";
    padding: 0px 20px;
    transform: rotate(5deg);
    cursor: pointer;
    display: none;
  }

  @media (max-width: 991px) {
    .gachapon-title {
      display: block;
    }
  }
}
.wallet-input {
  border-radius: 5px;
  filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.72));
  color: #fff;
  font-size: 20px;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px 10px;
  cursor: pointer;
  border: 2px solid #190705;
  padding: 0 10px;
}
#navbarText {
  justify-content: space-between;
}
</style>
