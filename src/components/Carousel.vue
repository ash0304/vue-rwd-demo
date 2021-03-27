<template>
  <v-carousel
    v-model="model"
    :continuous="true"
    :cycle="true"
    hide-delimiters
    :height="height"
  >
    <v-carousel-item v-for="(item, index) in carouselItem" :key="index">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <!-- PC -->
          <div :style="carouselObj(item)">
            <!-- banner-1 -->
            <div v-if="index === 0" class="custom-content">
              <div class="banner-1-row d-flex justify-center align-center">
                <div
                  class="banner-1-logo"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <img src="../assets/images/home/partyroyale-logo-white.png" />
                </div>
              </div>
              <div
                class="banner-1-row banner-1-btn-area d-flex justify-center align-center"
              >
                <button class="fortnite-btn custom-btn">
                  <span>LEARN MORE</span>
                </button>
              </div>
            </div>
            <!-- banner-2 -->
            <div v-if="index === 1" class="custom-content">
              <div
                class="banner-2-row d-flex flex-column justify-center align-center"
              >
                <div
                  class="banner-2-logo"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <img
                    src="../assets/images/home/fortnite-logo-white-300x96.png"
                  />
                </div>
                <h1 class="hidden-sm-and-down">Chapter 2 - Season 6</h1>
                <h1 class="hidden-md-and-up mobile">Chapter 3 - Season 6</h1>
                <div
                  class="banner-2-primal"
                  data-aos="fade-up"
                  data-aos-once="true"
                >
                  <img src="../assets/images/home/primal-logo.png" />
                </div>
              </div>
              <div
                class="banner-2-row banner-2-btn-area d-flex justify-center align-center"
              >
                <button class="fortnite-btn custom-btn">
                  <span>RUN WILD</span>
                </button>
              </div>
            </div>
            <!-- banner-3 -->
            <div v-if="index === 2" class="custom-content">
              <div
                class="banner-3-row d-flex flex-column justify-center align-center"
              >
                <h1 class="hidden-sm-and-down" data-aos="fade-down" data-aos-once="true">Season 6</h1>
                <h1 class="hidden-md-and-up mobile" data-aos="fade-down" data-aos-once="true">Season 6</h1>
                <div
                  class="banner-3-primal"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="400"
                >
                  <img
                    src="../assets/images/home/primal-white-en-1767x421.png"
                  />
                </div>
                <h2>BATTLE PASS</h2>
                <button class="fortnite-btn custom-btn custom-black">
                  <span>RUN WILD</span>
                </button>
              </div>
            </div>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {
      model: 0,
      height: "auto",
      carouselItem: [
        {
          srclg: require(`../assets/images/home/carousel01.jpg`),
        },
        {
          srclg: require(`../assets/images/home/carousel02.jpg`),
        },
        {
          srclg: require(`../assets/images/home/carousel03.jpg`),
        },
      ],
    };
  },
  methods: {
    carouselObj(item) {
      return {
        position: "relative",
        width: "100%",
        height: "100%",
        "min-height": `488px`,
        background: `url(${item.srclg})`,
        "background-position": "center center",
        "background-size": "cover",
        "padding-top": "56.25%",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-content {
  position: absolute;
  width: 100%;
  height: 94%;
  min-height: 488px;
  top: 0;
  left: 0;
  padding-top: 1.3%;
  .banner-1-row {
    padding: 1em;
    .banner-1-logo {
      img {
        display: inline;
        width: 22vw;
        margin-top: 0.5em;
        margin-bottom: 1em;
      }
    }
    &.banner-1-btn-area {
      position: absolute;
      width: 100%;
      bottom: 23%;
      text-align: center;
    }
  }
  .banner-2-row {
    padding: 1em;
    h1 {
      font-family: BurbankBigRegular-Black;
      color: black;
      letter-spacing: 0.2em;
      font-size: 1.5em;
      margin: 0.8em 0px 0.2em;
      text-transform: uppercase;
      line-height: 1;
      font-style: italic;
      &.mobile {
        color: black;
        letter-spacing: 0.1em;
        margin: 0px;
        font-size: 1em;
        line-height: 1;
        font-style: italic;
      }
    }
    .banner-2-logo {
      img {
        width: 15vw;
        margin-bottom: -5%;
        margin-top: 13%;
      }
    }
    .banner-2-primal {
      img {
        width: 22vw;
        margin-bottom: 1em;
        margin-top: 0.5em;
      }
    }
    &.banner-2-btn-area {
      position: absolute;
      width: 100%;
      bottom: 23%;
      text-align: center;
    }
  }
  .banner-3-row {
    width: 30%;
    margin-left: 12%;
    margin-top: 16%;
    position: relative;
    color: black;
    text-align: center;
    transform: none;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    h1 {
      font-family: BurbankBigRegular-Black;
      color: white;
      letter-spacing: 0.2em;
      font-size: 1.5em;
      margin: 0.8em 0px 0.2em;
      text-transform: uppercase;
      line-height: 1;
      font-style: italic;
      &.mobile {
        color: white;
        letter-spacing: 0.1em;
        margin: 0px;
        font-size: 1em;
        line-height: 1;
        font-style: italic;
      }
    }
    h2 {
      font-family: BurbankBigRegular-Black;
      color: black;
      font-size: 3em;
      letter-spacing: 0.3em;
      margin: 0px;
      line-height: 85%;
      text-transform: uppercase;
    }
    .banner-3-primal {
      img {
        width: 22vw;
        margin-top: 0.5em;
        margin-bottom: 1em;
      }
    }
  }
}
</style>