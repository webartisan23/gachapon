<template>
  <div class="artist-layout">
    <div class="description-layout">
      <div class="title">We're looking for artists to collaborate with!</div>
      <div class="description">
        <p>
          Our GACHAPON! platform offers you a unique way to monetize your
          content and artwork on the blockchain through the use of Gachapon
          machines.
        </p>
        <p>
          How does it work? You can contact us here: chonkfinance@gmail.com
          Alternatively, we're also available on Telegram (@chonkersam)
        </p>
        <p>
          Once you're approved, you'll be given access to the artist panel where
          you can start creating your own customized Gachapon machines.
        </p>
      </div>
    </div>
    <img class="chonk-chan-cat" src="../assets/images/chonk-chan-cat.webp" />
  </div>
</template>

<script>
export default {
  name: "ArtistTab",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.artist-layout {
  display: flex;
  .description-layout {
    margin: 80px 150px;
    max-width: 1000px;
    padding: 20px 80px;
    border-top-left-radius: 57px;
    border-top-right-radius: 57px;
    filter: drop-shadow(0px 3px 11.5px #000000);
    background-image: linear-gradient(180deg, #3c1713 0%, #000000 100%);
    border: 4px solid $main-color;

    .title {
      color: $main-color;
      font-size: 25px;
      font-family: "BLAME";
      margin-bottom: 50px;
      text-align: center;
      margin-top: 20px;
    }
    .description {
      font-size: 20px;
      color: white;
      font-family: "Togalite-Bold";
      padding: 0px 0px 20px 0px;
      p {
        margin: 20px 0px;
      }
    }
  }
  @media only screen and (max-width: 1570px) {
    .description-layout {
      max-width: 800px;
      margin: 80px 180px;
      border-top-left-radius: 45px;
      border-top-right-radius: 45px;
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 18px;
      }
    }
  }
  @media only screen and (max-width: 1350px) {
    .description-layout {
      max-width: 800px;
      margin: 80px 160px;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 18px;
      }
    }
    .chonk-chan-cat {
      position: fixed;
      bottom: -20px;
      right: -100px;
      height: 650px;
      display: block;
    }
  }
  @media only screen and (max-width: 1290px) {
    .description-layout {
      max-width: 800px;
      padding: 20px 30px;
      margin: 80px auto;
      border-top-left-radius: 35px;
      border-top-right-radius: 35px;
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 18px;
      }
    }
    .chonk-chan-cat {
      display: none;
    }
  }
  @media only screen and (max-width: 950px) {
    .description-layout {
      margin: 80px 100px;
      padding: 20px 30px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      .title {
        font-size: 22px;
      }
      .description {
        font-size: 18px;
      }
    }
    .chonk-chan-cat {
      display: none;
    }
  }
  @media only screen and (max-width: 750px) {
    .description-layout {
      margin: 80px 50px;
      padding: 20px 30px;
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 18px;
      }
    }
    .chonk-chan-cat {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    .description-layout {
      margin: 80px 30px;
      padding: 20px 30px;
      .title {
        font-size: 20px;
      }
      .description {
        font-size: 15px;
      }
    }
    .chonk-chan-cat {
      display: none;
    }
  }
}
.chonk-chan-cat {
  position: fixed;
  bottom: -20px;
  right: -100px;
  height: 700px;
  display: block;
}
</style>
