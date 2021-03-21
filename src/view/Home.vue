<template>
  <div class="homepage-layout">
    <div class="m-4 d-flex justify-content-center">
      <!-- <div class="body-layout"> -->

      <swiper
        :options="swiperOption"
        class="body-layout"
        @click-slide="linkToGachaponPage"
      >
        <swiper-slide
          class="subject-item"
          v-for="(image, index) in subject_image_urls"
          v-bind:key="'subject-image' + index"
        >
          <!-- <div
            class="subject-item"
            v-bind:style="{ 'background-image': 'url(' + image + ')' }"
          > -->
          <img class="primary-image" :src="image" />
          <img
            class="secondary-image"
            src="../assets/images/machine-test.webp"
          />
          <div class="subject-item-title">YOKAI</div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <!-- </div> -->
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
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      hover_item: -1,
      image_url: "../assets/images/chonker-avatar.png",
      subject_image_urls: [
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside2.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside2.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside2.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside3.png"),
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1500: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
          1150: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },
      },
    };
  },

  methods: {
    linkToGachaponPage() {
      this.$router.push("/gachapon").catch(() => {});
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.swiper-button-prev,
.swiper-button-next {
  background: $main-color;
  border-radius: 10px;
  color: black;
  width: 50px;
  height: 50px;
  font-size: 20px;
  &:after {
    font-size: 20px;
    font-weight: 900;
    font-family: "BLAME";
  }
}
.swiper-button-next:after {
  content: ">";
}
.swiper-button-prev:after {
  content: "<";
}
.homepage-layout {
  background-color: transparent;
  justify-content: center;
  position: relative;
  padding-bottom: 60px;
  .body-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 3px solid $main-color;
    width: 80%;
    background: $background-color;
    // background-image: linear-gradient(180deg, #331310 0%, #000000 100%);
    .subject-item {
      cursor: pointer;
      border-left: 2px solid $main-color;
      border-right: 2px solid $main-color;
      // background-image: url("../assets/images/inside1.png");
      background-repeat: no-repeat;
      background-size: cover;
      text-align: center;
      overflow: hidden;
      align-items: flex-end;
      .primary-image {
        height: 91%;
      }
      .secondary-image {
        position: absolute;
        // margin-bottom: 15%;
        margin-bottom: 25%;
        left: 50%;
        transform: translateX(-50%);
        height: 10%;
        min-height: 200px;
        bottom: 20px;
      }
      .subject-item-title {
        font-size: 30px;
        color: $main-color;
        font-family: "Superion";
        text-align: center;
        padding: 5px;
      }
    }
  }
}
</style>
