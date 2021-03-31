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
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1 class="fs-font" style="text-align: center">FORTNITE CREW FAQS</h1>
          <div class="px-md-16">
            <FAQ />
          </div>
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