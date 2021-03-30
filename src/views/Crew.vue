<template>
  <div>
    <v-container fluid>
      <v-row>
        <!-- section 1 -->
        <v-col cols="12" class="pa-0">
          <div class="section-1">
            <div class="bg-img"></div>
            <div class="logo-area">
              <div class="logo-box">
                <span>
                  <img
                    src="../assets/images/crew/en-subscriptions-fn-crew-png-wordmark-2200x1400.png"
                    class="crew-logo"
                    data-aos="fade-left"
                  />
                </span>
              </div>
            </div>
          </div>
        </v-col>
        <!-- section 2 -->
        <v-col cols="12" class="px-0">
          <div class="section-2">
            <div class="odds-line"></div>
            <div class="even-line"></div>
            <div class="odds-line"></div>
            <div class="even-line"></div>
            <div class="odds-line"></div>
            <div class="even-line"></div>
            <div class="odds-line"></div>
            <div class="even-line"></div>
            <div class="odds-line"></div>
            <span class="vbucks-img">
              <img src="../assets/images/crew/battlepass-1920x1171.png" class="img-1" data-aos="fade-right" />
            </span>
            <div class="text-block-1">
              <div class="text-box-1"  data-aos="fade-left">
                <h2 class="fs-font">BATTLE PASS INCLUDED FOR THE FULL SEASON</h2>
                <p class="fs-font">MEMBER OF THE FORTNITE CREW? CONGRATS, YOU HAVE FULL ACCESS TO THE CURRENT SEASONS’ BATTLE PASS, AND YOU’LL CONTINUE TO RECEIVE FUTURE BATTLE PASSES WITH YOUR SUBSCRIPTION. UNLOCK 100 AWESOME BATTLE PASS REWARDS JUST BY PLAYING FORTNITE.</p>
              </div>
            </div>
          </div>
        </v-col>
        <!-- section 3 -->
        <v-col cols="12" class="px-0">
          <div class="section-3">
            <div class="content-block buck-left" data-aos="fade-right">
              <span>
                <img src="../assets/images/crew/vbucks-left-796x722.png" class="left-img">
              </span>
            </div>
            <div class="content-block" data-aos="fade-up">
              <span class="d-flex justify-center align-center">
                <div class="buck-middle">
                  <h2 class="fs-font">1,000 Bonus V-Bucks Every Month</h2>
                  <p class="fs-font">Each month you’ll receive 1,000 V-Bucks that you can put towards the hottest Outfits, Emotes and more. And with the included Battle Pass, you’ll be able to unlock even more V-Bucks!</p>
                </div>
              </span>
            </div>
            <div class="content-block buck-right" data-aos="fade-left">
              <span>
                <img src="../assets/images/crew/vbucks-right-796x722.png" class="right-img">
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" class="px-16">
          <h1 class="fs-font" style="text-align: center">FORTNITE CREW FAQS</h1>
          <FAQ />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import FAQ from "../components/FAQ";
export default {
  name: "Crew",
  components: {
    FAQ,
  },
};
</script>
<style lang="scss" scoped>
.section-1 {
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 700px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .bg-img {
    position: absolute;
    margin: 0 auto;
    background: #fff;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/images/crew/15br-web-subs-llamabro-desktop.jpg")
      no-repeat;
    background-size: cover;
    background-position: center center;
    padding-top: 56.25%;
  }
  .logo-area {
    position: relative;
    color: white;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    .logo-box {
      display: block;
      padding: 1em 0px;
      .crew-logo {
        width: 50vw;
        vertical-align: middle;
      }
    }
  }
}
.section-2 {
  position: relative;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .odds-line {
    position: relative;
    background: url("../assets/images/crew/left-1.png") center top / cover;
    background-repeat: repeat-x;
    height: 100px;
    width: 200%;
    animation: 200s linear 0s infinite normal both running moveLeft;
    margin-left: -100%;
  }
  .even-line {
    position: relative;
    background: url("../assets/images/crew/right-1.png") center top / cover;
    background-repeat: repeat-x;
    height: 100px;
    width: 200%;
    animation: 200s linear 0s infinite normal both running moveRight;
  }
  .vbucks-img {
    position: absolute;
    width: 100%;
    top: 0px;
    bottom: 0px;
    display: inline-block;
    .img-1 {
      max-height: 100%;
      display: block;
    }
    img {
      vertical-align: middle;
      border: 0;
    }
  }
  .text-block-1 {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0px , -50%);
    width: 40%;
    padding: 7em;
    z-index: 1;
    .text-box-1 {
      text-align: left;
      padding: 2em;
      color: black;
      display: inline-block;
      h2 {
        font-size: 3.5em;
        line-height: 85%;
        text-transform: uppercase;
        margin-bottom: 2%;
      }
      p {
        line-height: 1.5;
        font-size: 1em;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }
}
.section-3 {
  display: flex;
  min-height: 600px;
  margin-bottom: 2em;
  .content-block {
    flex-basis: 33.3333%;
    display: flex;
    &.buck-left, .buck-right {
      position: relative;
      right: -15px;
    }
    .buck-middle {
      text-align: center;
      padding: 2em;
      color: black;
      h2 {
        font-size: 1.875em;
        line-height: 85%;
        text-transform: uppercase;
      }
      p {
        font-size: 1.2em;
        font-weight: 400;
        line-height: 1.25;
        text-transform: uppercase;
      }
    }
    .left-img {
      width: 100%;
      display: block;
    }
    .right-img {
      width: 100%;
      display: block;
      right: -25px;
    }
    img {
      vertical-align: middle;
      border: 0;
    }
  }
}
@media screen and (max-width: 768px) {
  .section-3 {
    .content-block {
      .buck-middle {
        h2 {
          font-size: 2.2em;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .section-3 {
    .content-block {
      .buck-middle {
        h2 {
          font-size: 2.5em;
        }
      }
    }
  }
}
@media screen and (max-width: 1199px) {
  .section-3 {
    .content-block {
      .buck-middle {
        h2 {
          font-size: 1.25em;
        }
      }
    }
  }
}
@keyframes moveRight {
  0% {
    transform: translate3d(0%, 0%, 1px);
  }
  50% {
    transform: translate3d(-50%, 0%, 1px);
  }
  100% {
    transform: translate3d(0%, 0%, 1px);
  }
}
@keyframes moveLeft {
  0% {
    transform: translate3d(0%, 0%, 1px);
  }
  50% {
    transform: translate3d(50%, 0%, 1px);
  }
  100% {
    transform: translate3d(0%, 0%, 1px);
  }
}
</style>