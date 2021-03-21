<template>
  <div class="collection-layout container">
    <div class="title">MY CHONKIEST COLLECTION!</div>
    <div class="collection-items-layout">
      <div class="d-flex justify-content-start mb-3" style="flex-wrap: wrap" v-if="cards.length">
        <div v-for="(card, index) in cards" :key="index" class="image-item">
          <v-lazy-image
            :src="card.static"
            :src-placeholder="require('../assets/images/chonkchan.webp')"
          />
          
          <img src="../assets/images/play-button.webp" class="play-button" />
        </div>     
      </div>
      <div class="no-collections" v-else>
        <p>No Collections</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ethers } from "ethers";
import { mapGetters } from 'vuex'
import { contractAddress } from "@/const";
import NFTABI from "@/assets/ABI/NFT.json";

export default {
  name: "Collection",
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Big Brain Collection",
          remaining: 1142,
          redeemed: 51,
          cost: 4,
          balance: 10,
          image: "https://farm.chonker.finance/api/img/chonk-chan.gif",
          static: "https://farm.chonker.finance/api/img/chonk-chan.jpg"
        },
        {
          id: 2,
          name: "Big Brain Collection",
          remaining: 1142,
          redeemed: 51,
          cost: 4,
          balance: 10,
          image: "https://farm.chonker.finance/api/img/vitalik-og.gif",
          static: "https://farm.chonker.finance/api/img/vitalik-og.jpg"
        },
      ],
    }
  },
  computed: {
    ...mapGetters([
      'walletAddress',
      'provider'
    ]),
  },
  watch: {
    walletAddress() {
      this.getCollections();
    } 
  },
  methods: {
    async getCollections() {
      if(this.walletAddress) {
        const nft = new ethers.Contract(contractAddress.NFT, NFTABI, this.provider);
        const filter = await nft.filters.TransferSingle(null, null, this.walletAddress);
        const transfers = await nft.queryFilter(filter);
        const assets = [... new Set(transfers.map(tx => tx.args.id.toNumber()))]
        this.cards = [];
        assets.forEach(async (id) => {
          const balance = (await nft.balanceOf(this.walletAddress, id)).toNumber();
          if (balance > 0) {
            const metadata = await (await fetch(`https://farm.chonker.finance/api/NFT/${id}`)).json()
            metadata.image = metadata.image_url.replace("https://farm.chonker.finance/", "/"); 
            metadata.static = metadata.image.replace(/\.[^/.]+$/, ".jpg");

            this.cards.push({ balance, ...metadata, id });    
          }
          console.log(this.cards)
        });
      }
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.collection-layout {
  text-align: center;
  .title {
    color: $main-color;
    font-family: "BLAME";
    font-size: 35px;
    margin: 20px 0px;
  }
  .collection-items-layout {
    margin: 10px 0;
    padding: 20px 60px;
    border-top-left-radius: 57px;
    border-top-right-radius: 57px;
    filter: drop-shadow(0px 3px 11.5px #000000);
    background-image: linear-gradient(180deg, #3c1713 0%, #000000 100%);
    border: 4px solid $main-color;

    .image-item {
      width: 20%;
      padding: 10px;
      position: relative;
      img:first-child {
        width: 100%;
      }
      img.play-button {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 70px;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
    }
    // img {
    //   width: 20%;
    //   margin: 20px;
    // }
    .no-collections {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        font-size: 20px;
        color: white;
        font-family: "BLAME";
      }
    }
  }
  @media only screen and (max-width: 1570px) {
    .title {
      font-size: 30px;
    }
  }
  @media (max-width: 1350px) {
    .title {
      font-size: 20px;
    }
  }
  @media only screen and (max-width: 1270px) {
  }

  @media only screen and (max-width: 1040px) {
  }

  @media (max-width: 991px) {
    .collection-items-layout {
      padding: 20px 30px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      margin: 10px 0;

      .image-item {
        width: 33.333%;
        padding: 10px;
      }
    }
  }

  @media (max-width: 500px) {
    .collection-items-layout {
      padding: 20px 30px;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;
      margin: 10px 0;

      .image-item {
        width: 50%;
        padding: 10px;
      }
    }
  }
}
</style>
