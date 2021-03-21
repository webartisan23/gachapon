<template>
  <div class="gochapon-layout">
    <div class="main-layout">
      <div class="chonker-card mt-3">
        <div class="avatar">
          <img src="../assets/images/chonker-avatar.png" />
        </div>
        <div class="chonker-title-layout">
          <span class="title">CHONK CHAN</span>
          <img src="../assets/images/bird.png" />
        </div>
        <span class="description"
          >Devourer of worlds! Official Chonker Finance Machines can be found
          here.
        </span>
        <div class="custom-button-3">MORE MACHINES BY THIS ARTIST</div>
      </div>
      <div class="approve-machine-layout mt-3">
        <div class="description-layout">
          <p class="title">YOKAI SERIES</p>
          <p class="description">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s when an unknown printer
            took a galley of type.
          </p>
        </div>
        <div class="setting-layout">
          <div class="range-slider-layout w-100 px-2">
            <range-slider
              class="range-slider"
              min="0"
              max="100"
              step="1"
              v-model="range_value"
            >
            </range-slider>
          </div>
          <div class="setting-value-description">
            <div>TOTAL:</div>
            <div>{{ range_value }} TAKYAKI</div>
          </div>
        </div>
        <div class="processing-layout">
          <div class="custom-button-3 ">APPROVE MACHINE</div>
          <div class="exchange-ratio">1 TAIYAKI = 1 SPIN</div>
        </div>
      </div>
      <div class="machine-test mt-3">
        <img src="../assets/images/machine-test.webp" />
      </div>
    </div>
    <div class="explain-layout">
      <div class="what-inside-title">WHAT'S INSIDE?</div>
      <div class="inside-item" ref="swiperBox">
        <swiper :options="swiperOption" class="body-layout">
          <swiper-slide
            v-for="(item, index) in images"
            v-bind:key="'index' + index"
          >
            <img class="mx-4" :src="item" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
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

import RangeSlider from "vue-range-slider";
// you probably need to import built-in style
// import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  name: "Gachapon",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    RangeSlider,
  },
  directives: {
    swiper: directive,
  },
  watch: {
    range_value: function(newValue) {
      console.log(newValue);
      this.$el.getElementsByClassName(
        "range-slider-knob"
      )[0].innerHTML = newValue;
    },
  },
  data() {
    return {
      images: [
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside2.png"),
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside2.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside1.png"),
        require("@/assets/images/inside2.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside3.png"),
        require("@/assets/images/inside4.png"),
        require("@/assets/images/inside2.png"),
      ],
      range_value: 50,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1600: {
            slidesPerView: 7,
            spaceBetween: 0,
          },
          1240: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  mounted() {
    this.$el.getElementsByClassName(
      "range-slider-knob"
    )[0].innerHTML = this.range_value;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
@import "~vue-range-slider/dist/vue-range-slider.css";

.gochapon-layout {
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 20px;
  position: relative;
  .range-slider {
    width: 100%;
    .range-slider-fill {
      background-color: #fbb605;
    }

    .range-slider-knob {
      border-radius: 5px;
      height: 30px;
      width: 50px;
      background-color: $background-color;
      border-color: $main-color;
      color: $main-color;
      text-align: center;
      align-items: center;
      display: flex;
      font-size: 18px;
      justify-content: center;
    }
  }
  .main-layout {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .chonker-card {
      width: 467px;
      // height: 419px;
      border-top-left-radius: 37px;
      border-top-right-radius: 37px;
      filter: drop-shadow(0px 3px 11.5px #000000);
      background-image: linear-gradient(180deg, #3c1713 0%, #000000 100%);
      border: 3px solid $main-color;
      justify-content: center;
      padding: 20px;
      align-items: center;
      display: block;
      text-align: center;

      .avatar {
        img {
          width: 160px;
        }
      }

      .chonker-title-layout {
        margin: 10px;
        align-items: center;
        display: flex;
        justify-content: center;

        .title {
          font-size: 25px;
          font-family: "Togalite-Bold";
          color: $main-color;
          margin: 0px 30px;
        }
      }

      .description {
        font-size: 21px;
        color: white;
        font-family: "Togalite-Regular";
      }

      .custom-button-3 {
        font-size: 20px;
      }
    }

    .approve-machine-layout {
      margin: 0px 20px;
      max-width: 500px;

      .description-layout {
        padding: 15px;
        border-radius: 20px;
        filter: drop-shadow(0px 3px 6px #000000);
        background-image: linear-gradient(180deg, #371511 0%, #000000 100%);
        border: 1.5px solid $main-color;

        .title {
          color: $main-color;
          font-size: 25px;
          font-family: "Togalite-Bold";
        }

        .description {
          color: white;
          font-size: 16px;
          max-width: 500px;
          font-family: "Togalite-Regular";
        }
      }

      @media (max-width: 500px) {
        .approve-machine-layout {
          width: 100%;
          margin-left: 0;
          margin-right: 0;
        }
      }

      .setting-layout {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .range-slider-layout {
          margin: 50px 0px;
          display: flex;
        }

        .setting-value-description {
          color: $main-color;
          font-size: 21px;
          font-family: "Togalite-Bold";
        }
      }

      .processing-layout {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .custom-button-3 {
          padding: 20px 10px !important;
          font-size: 20px;
          font-family: "Togalite-Bold";
        }

        .exchange-ratio {
          padding: 10px 20px;
          border-radius: 4px;
          height: 55px;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-top-right-radius: 30px;
          color: $main-color;
          font-family: "Togalite-Bold";
          font-size: 20px;
          filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.9));
          background-image: linear-gradient(180deg, #411717 0%, #000000 100%);
          border: 1.5px solid #fbb605;
        }
      }

      @media (max-width: 600px) {
        .processing-layout {
          flex-direction: column;
        }
      }
    }

    .machine-test {
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  .explain-layout {
    max-width: 1355px;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;

    .swiper-button-prev,
    .swiper-button-next {
      position: absolute;
      width: 2rem;
      height: 2rem;
      background-size: 100% 100%;
      background-color: $main-color;
      border-radius: 8px;
      color: black;
      &:after {
        font-size: 13px;
        font-weight: 600;
      }
    }

    .what-inside-title {
      padding: 15px 15px;
      max-width: 180px;
      text-align: center;
      border-radius: 7px;
      font-family: "Togalite-Bold";
      color: $main-color;
      filter: drop-shadow(0px 3px 3.5px rgba(0, 0, 0, 0.9));
      background-image: linear-gradient(180deg, #250c0c 0%, #000000 100%);
      border: 1.5px solid $main-color;
      position: absolute;
      top: -48px;
      z-index: -1;
      left: 30px;
    }

    .inside-item {
      margin-top: -30px;
      padding: 20px 20px;
      border-radius: 20px;
      align-items: center;
      display: flex;
      background-image: linear-gradient(
        180deg,
        #000000 0%,
        rgba(25, 7, 5, 0.39) 100%
      );
      border: 3px solid $main-color;
      overflow: hidden;

      img {
        height: 180px;
      }
    }
  }

  @media (max-width: 1384px) {
    .explain-layout {
      max-width: 1007px;
    }
  }

  @media (max-width: 1036px) {
    .explain-layout {
      max-width: 888px;
    }
  }

  @media (max-width: 917px) {
    .explain-layout {
      max-width: 800px;
    }
  }
}
</style>
