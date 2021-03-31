<template>
  <v-container fluid black>
    <v-row>
      <v-col cols="12" class="pa-0">
        <div class="stw">
          <div class="bg-img"></div>
          <div class="logo-section">
            <div class="call-out">
              <div>
                <h1 class="fs-font">Save the World</h1>
              </div>
              <div>
                <h3 class="fs-font">
                  <span>
                    Discover the epic PvE action-building co-operative campaign.
                    You and your friends battle to hold back the monster hordes
                    and explore a vast, destructible world where no two games
                    are ever the same. Build huge forts, craft weapons, find
                    loot and level up your Heroes.
                  </span>
                </h3>
              </div>
            </div>
            <div class="trailer-section">
              <div class="trailer" @click.stop="dialog = true">
                <img
                  src="../assets/images/saveTheWorld/Fortnite_save-the-world_Video-328x196.png"
                  class="trailer-img"
                />
                <h5 class="fs-font">Cinematic Trailer</h5>
              </div>
              <!-- v-dialog -->
              <v-dialog v-model="dialog" width="800">
                <div class="iframe-wrapper">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/DoSLJzgDk14?autoplay=0&rel=0&fs=1&enablejsapi=1&widgetid=1&mute=undefined&origin=https%3A%2F%2Fwww.epicgames.com&enablejsapi=1"
                    frameborder="0"
                  ></iframe>
                </div>
              </v-dialog>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- Header Text -->
    <v-row>
      <v-col cols="12">
        <div class="fs-font stw-header-text">Get save the world now</div>
      </v-col>
    </v-row>
    <!-- Edition Section -->
    <v-row>
      <v-col cols="12">
        <div class="edition-section">
          <div class="pack-block-container">
            <div class="edition-pack">
              <img
                src="../assets/images/saveTheWorld/machinist-mina-pack-desktop-717x761.png"
                class="character-img"
              />
              <h3 class="fs-font">Machinist Mina Pack</h3>
              <h4 class="fs-font">
                MACHINIST MINA CHALLENGES: EARN UP TO 1000 V-BUCKS AND 1000
                X-RAY TICKETS BY COMPLETING SAVE THE WORLD DAILY QUESTS.
              </h4>
              <div class="verb fs-font">
                <span>INCLUDES</span>
              </div>
              <div class="pack-content-wrapper fs-font">
                <div class="pack-content-main">
                  <img
                    src="../assets/images/saveTheWorld/save-the-world-1488x1748.jpg"
                  />
                  <ul class="pack-content-list">
                    <li>ACCESS TO “SAVE THE WORLD” PVE CAMPAIGN</li>
                    <li>MACHINIST MINA HERO</li>
                    <li>ZAP-O-MAX TRAP SCHEMATIC</li>
                    <li>TANKBUILT LOADER BACK BLING</li>
                  </ul>
                </div>
                <p class="fs-font pack-content-bonus-text">
                  BONUS: BACK BLING AND MACHINIST MINA OUTFIT UNLOCKED IN BATTLE
                  ROYALE AND CREATIVE MODES
                </p>
              </div>
              <div class="price fs-font">$15.99</div>
              <div class="actual-price"></div>
              <img
                src="../assets/images/saveTheWorld/machinist-mina-pack-mobile-726x767.png"
                class="pack-content-img-mobile"
              />
              <div class="can-buy">
                <button class="can-buy-btn fs-font">BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "SaveTheWorld",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.stw {
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 900px;
  overflow: hidden;
  .bg-img {
    position: absolute;
    background: url("../assets/images/saveTheWorld/aspot-desktop-1923x1302.jpg")
      no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .logo-section {
    position: relative;
    text-align: center;
    color: #fff;
    max-width: 900px;
    padding: 4em 4em 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .call-out {
      margin-top: 30%;
      h1 {
        font-size: 100px;
        line-height: 80px;
        text-transform: uppercase;
      }
      h3 {
        font-size: 21px;
        line-height: 28px;
        text-transform: uppercase;
      }
    }
  }
  .trailer-section {
    display: flex;
    justify-content: space-evenly;
    margin: 1em auto;
    .trailer {
      height: auto;
      margin: 0 2em;
      cursor: pointer;
      .trailer-img {
        max-width: 300px;
        width: 100%;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale3d(1.01, 1.01, 1.01);
        }
      }
      h5 {
        font-size: 2em;
      }
    }
  }
}
.stw-header-text {
  color: #ef45ec;
  font-size: 50px;
  font-style: italic;
  margin-top: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
}
.edition-section {
  padding: 0 3em;
  display: flex;
  position: relative;
  margin-bottom: 4em;
  flex-wrap: wrap;
  .pack-block-container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background: url("../assets/images/saveTheWorld/machinist-background-desktop-1475x805.png")
      no-repeat;
    background-size: cover;
    .edition-pack {
      padding: 2em 4em 7em;
      height: 100%;
      position: relative;
      .character-img {
        position: absolute;
        right: -100px;
        bottom: 0;
      }
      h3 {
        color: white;
        font-size: 75px;
        line-height: 1;
        text-align: left;
        text-transform: uppercase;
      }
      h4 {
        color: rgb(243, 184, 0);
        font-size: 20px;
        font-weight: 900;
        text-align: left;
        text-transform: uppercase;
        line-height: 1.1;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .verb {
        font-size: 22px;
        color: #fff;
        text-align: center;
        line-height: 1.5;
        text-transform: uppercase;
      }
      .pack-content-wrapper {
        .pack-content-main {
          align-items: center;
          display: flex;
          margin-bottom: 20px;
          flex-direction: column;
          img {
            width: 150px;
          }
          .pack-content-list {
            color: #fff;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 900;
            line-height: 1.75;
          }
        }
        .pack-content-bonus-text {
          color: #ff0;
          text-transform: uppercase;
          font-size: 20px;
          font-style: italic;
          font-weight: 900;
          line-height: 1.1;
          text-align: center;
        }
      }
      .price {
        text-align: center;
        color: #fff;
        font-size: 75px;
        line-height: 1;
      }
      .actual-price {
        color: #fff;
        font-size: 30px;
        line-height: 1.5;
        margin-left: 0.5em;
        margin-bottom: 1em;
        font-weight: 500;
      }
      .pack-content-img-mobile {
        position: relative;
        bottom: 0;
        width: 100%;
      }
      .can-buy {
        width: 100%;
        .can-buy-btn {
          background: #ff6305;
          padding: 0 1.5em;
          color: #fff;
          font-size: 20px;
          line-height: 50px;
          margin-top: 1em;
          clip-path: polygon(2% 0, 98% 0, 98% 100%, 2% 100%);
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: #d14f00;
            clip-path: polygon(4% 0, 100% 0, 98% 100%, 2% 100%);
          }
        }
      }
    }
  }
}
// media
@media screen and (max-width: 768px) {
  .edition-section {
    .pack-block-container {
      background: url("../assets/images/saveTheWorld/machinist-background-mobile-670x2372.png");
    }
  }
}

@media screen and (max-width: 1200px) {
  .edition-section {
    .pack-block-container {
      .edition-pack {
        h3 {
          text-align: center;
        }
        .verb {
          text-align: center;
        }
      }
    }
  }
}

// only
@media only screen and (max-width: 767px) {
  .edition-section {
    .pack-block-container {
      .edition-pack {
        h3 {
          font-size: 2em;
        }
        .price {
          font-size: 2em;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .edition-section {
    .pack-block-container {
      .edition-pack {
        .pack-content-wrapper {
          .pack-content-main {
            flex-direction: row;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 991px) {
  .edition-section {
    .pack-block-container {
      margin: 1em 0;
      .edition-pack {
        padding: 2em 1em;
        .can-buy {
          text-align: center;
        }
        .character-img {
          display: none;
        }
      }
    }
  }
}
@media only screen and (min-width: 992px) {
  .edition-section {
    .pack-block-container {
      .edition-pack {
        .pack-content-img-mobile {
            display: none;
        }
      }
    }
  }
}
@media only screen and (max-width: 1199px) {
  .stw {
    .logo-section {
      .call-out {
        h1 {
          font-size: 70px;
        }
      }
    }
  }
  .edition-section {
    .pack-block-container {
      .edition-pack {
        .character-img {
          height: 70%;
          right: -50px;
        }
        h3 {
          font-size: 2em;
        }
        .price {
          font-size: 4em;
        }
      }
    }
  }
}

@media only screen and (min-width: 1200px) {
  .edition-section {
    .pack-block-container {
      .edition-pack {
        h3 {
          text-align: left;
          margin-right: 500px;
        }
        h4 {
          margin-right: 500px;
        }
        .verb {
          text-align: left;
        }
        .price {
          text-align: left;
        }
        .pack-content-wrapper {
          .pack-content-bonus-text {
            text-align: left;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1399px) {
  .edition-section {
    .pack-block-container {
      .edition-pack {
        padding: 1em;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .stw {
    .logo-section {
      .call-out {
        h1 {
          font-size: 48px;
          line-height: 50px;
        }
      }
    }
  }
  .edition-section {
    .pack-block-container {
      .edition-pack {
        .pack-content-wrapper {
          .pack-content-main {
            img {
              margin: 0 auto 20px;
            }
          }
        }
      }
    }
  }
}
</style>