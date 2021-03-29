<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0">
        <div class="jumptron-box">
          <div class="bg-img"></div>
          <div class="logo-area">
            <div class="logo-box">
              <span>
                <img
                  src="../assets/images/battleRoyale/fortnite-logo-white-300x96.png"
                  class="fn-logo"
                  data-aos="fade-up"
                />
              </span>
              <span>
                <h1
                  class="hidden-sm-and-down fs-font"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Chapter 2 - Season 6
                </h1>
                <h1
                  class="hidden-md-and-up mobile fs-font"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Chapter 2 - Season 6
                </h1>
              </span>
              <span>
                <img
                  src="../assets/images/battleRoyale/en-1767x421.png"
                  class="pr-logo"
                  data-aos="fade-up"
                />
              </span>
            </div>
          </div>
          <!-- video-player-dialog -->
          <div class="play-btn-area">
            <div class="play-btn-touch-area" @click.stop="dialog = true">
              <h4 class="fs-font">Watch Trailer</h4>
              <span class="video-play-button">
                <span></span>
              </span>
            </div>
            <!-- v-dialog -->
            <v-dialog v-model="dialog" width="800">
              <div class="iframe-wrapper">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/gJ-4efoCw5o?autoplay=0&rel=0&fs=1&enablejsapi=1&widgetid=7&mute=undefined&origin=https%3A%2F%2Fwww.epicgames.com&enablejsapi=1"
                  frameborder="0"
                ></iframe>
              </div>
            </v-dialog>
          </div>
        </div>
      </v-col>
    </v-row>
    <!-- content -->
    <v-row>
      <v-col cols="12" class="pa-0">
        <div
          v-for="(item, index) in contentData"
          :key="index"
          class="screen-section fs-font"
        >
          <img :src="item.src" />
          <div
            :class="`screen-content screen-content-${index}`"
            data-aos="fade-up"
            :data-aos-delay="index * 500"
            data-aos-once="true"
          >
            <h1>
              <span>{{ item.title }}</span>
            </h1>
            <h4>
              <span>
                {{ item.content }}
              </span>
            </h4>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="pa-0">
        <PrimalBattlePass />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import PrimalBattlePass from "../components/PrimalBattlePass";
export default {
  name: "BattleRoyale",
  components: {
    PrimalBattlePass,
  },
  data() {
    return {
      dialog: false,
      contentData: [
        {
          title: "ZERO CRISIS FINALE",
          content:
            "During the Zero Crisis Finale, Agent Jones and The Foundation (one of The Seven) sealed the Zero Point in a tower of stone. As the Zero Point was being contained, it sent a mysterious pulse across the Island, erasing any advanced technology in its path and reshaping the landscape of the Island.",
          src: require("../assets/images/battleRoyale/battlepass-chapter-2-season-6-zero-crisis-finale-1024x513.png"),
        },
        {
          title: "CROSS THE PRIMAL BOUNDARY",
          content:
            "UNTOUCHED BY MODERN TECHNOLOGY, A PRIMAL BIOME SPREADS THROUGH THE ISLAND. AT ITS CENTER IS THE SPIRE AND THE VILLAGE THAT SURROUNDS IT. LURKING IN THE SHADOW OF THE SPIRE, THE WILDERNESS HAS TAKEN OVER THE ISLAND'S LOCATIONS, LIKE COLOSSAL CROPS AND BONEY BURBS. IF YOU VENTURE TO THE EDGES OF THE PRIMAL BIOME, YOU'LL FIND GUARDIAN SPIRES PROTECTED BY MYSTERIOUS FORCES.",
          src: require("../assets/images/battleRoyale/battle-pass-chapter-2-season-6-cross-the-primal-boundary-1776x889.png"),
        },
        {
          title: "MAKE YOUR WEAPON",
          content:
            "DON'T JUST FIND YOUR TOOLS. MAKE THEM. USING LOOT FROM WILDLIFE AND TECHNOLOGY UNTOUCHED BY THE PULSE, CRAFT YOUR OWN WEAPONS ANYWHERE. CRAFT HIGH-DAMAGE PRIMAL WEAPONS LIKE THE PRIMAL RIFLE, HIGH-PRECISION FAMILIAR WEAPONS LIKE THE REVOLVER, AND POWERFUL BOWS LIKE THE FLAME AND METAL BOW.",
          src: require("../assets/images/battleRoyale/battlepass-chapter-2-season-6-make-your-weapon-1776x889.png"),
        },
        {
          title: "TAME THE WILD",
          content:
            "WILDLIFE ABOUNDS ON THE ISLAND, RANGING FROM PREY LIKE CHICKENS TO VICIOUS PREDATORY WOLVES. HUNT OR TAME WILDLIFE TO NOT ONLY LIVE OFF THE LAND BUT TO GATHER MATERIALS FOR CRAFTING. AND THOUGH WOLVES MAY ROAM, THE MOST FEARSOME PREDATORS HAVE YET TO HATCH...",
          src: require("../assets/images/battleRoyale/battlepass-chapter-2-season-6-tame-the-wild-1024x513.png"),
        },
        {
          title: "SUPPLIES FOR SUCCESS",
          content:
            "THE ZERO POINT MAY NOT HAVE DESTROYED THE ISLAND, BUT SOME WERE PREPARING FOR THAT POSSIBILITY. IF YOU COME ACROSS BUNKER CHESTS, OPEN THEM UP FOR POWERFUL WEAPONS THAT CAN RANGE FROM RARE TO LEGENDARY, LIKE ROCKET LAUNCHERS. AS THE SEASON PROGRESSES, NEW ADVANCEMENTS WILL ARRIVE IN THE FORM OF WEAPONS AND UPGRADES, LIKE A NEW CHONKERS TIRE SET TO LET YOU TEAR IT UP OFF-ROAD.",
          src: require("../assets/images/battleRoyale/battlepass-chapter-2-season-6-supplies-for-success-1024x513.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.jumptron-box {
  position: relative;
  width: 100%;
  height: 90vh;
  min-height: 900px;
  overflow: hidden;
  .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: url("../assets/images/battleRoyale/battlepass-chapter-2-season-6-primal-s4-1920x960.jpg")
      no-repeat;
    background-size: cover;
    background-position: center center;
    padding-top: 56.25%;
  }
  .logo-area {
    position: relative;
    color: black;
    width: 100%;
    text-align: center;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .logo-box {
      display: block;
      padding: 1em 0px;
      .fn-logo {
        width: 15vw;
        margin-bottom: -5%;
        margin-top: -6%;
        vertical-align: middle;
      }
      h1 {
        color: black;
        letter-spacing: 0.2em;
        font-size: 1.5em;
        margin: 0.8em 0px 0.2em;
        line-height: 1;
        font-style: italic;
      }
      .pr-logo {
        display: inline;
        margin-bottom: 1em;
        width: 22vw;
        margin-top: 0.5em;
      }
    }
  }
  .play-btn-area {
    position: absolute;
    height: 4em;
    width: 30em;
    bottom: 13%;
    right: 3%;
    .play-btn-touch-area {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      h4 {
        color: white;
        font-size: 2.5em;
        margin: 0.1em 0.5em 0px 0px;
      }
    }
  }
}
.screen-section {
  width: 65%;
  margin: 5% auto 0;
  perspective: 100vw;
  text-align: center;
  h1 {
    color: rgb(77, 204, 250);
    font-size: 4vw;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h4 {
    color: black;
    width: 70%;
    margin: auto;
    font-size: 1.25vw;
    line-height: 90%;
  }
  &:first-child {
    margin-top: 0;
    img {
      margin-top: -5em;
    }
  }
  img {
    width: 100%;
  }
}
@media only screen and (max-width: 1199px) {
  .screen-section {
    width: 80%;
    h1 {
      font-size: 2em;
    }
  }
}
@media screen and (max-width: 2048px) {
  .screen-section {
    &:first-child {
      img {
        margin-top: -4em;
      }
    }
  }
}
@media screen and (max-width: 1440px) {
  .screen-section {
    &:first-child {
      img {
        margin-top: -3.5em;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .screen-section {
    &:first-child {
      img {
        margin-top: -3em;
      }
    }
  }
}
@media screen and (max-width: 1700px) {
  .jumptron-box {
    min-height: 850px;
  }
}
@media screen and (max-width: 1440px) {
  .jumptron-box {
    height: 68vh;
    min-height: 600px;
    .logo-area {
      .logo-box {
        h1 {
          font-size: 1.1em;
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .jumptron-box {
    height: 54vh;
    min-height: 450px;
    .logo-area {
      .logo-box {
        h1 {
          font-size: 0.8em;
        }
      }
    }
  }
}
</style>