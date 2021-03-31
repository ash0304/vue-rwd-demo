<template>
  <v-container
    fluid
    class="px-lg-16 px-md-16 px-sm-8 px-xs-0 pb-12"
    data-aos="fade-up"
    data-aos-once="true"
  >
    <!-- 第一區 -->
    <v-row class="move-upper" align-content="center" justify="center">
      <v-col cols="12" xl="7" lg="7" md="6" sm="6">
        <div class="grid-item">
          <v-card :height="height" class="rounded-0">
            <v-img
              src="../assets/images/news/news1.jpg"
              width="100%"
              height="100%"
              class="d-flex align-end"
            >
              <v-card-title
                class="fs-font d-flex flex-column align-start custom mb-2 px-8"
              >
                <div class="date">MAR 23, 2021</div>
                <div class="main mt-1">
                  REV UP FOR THE NEXT LLAMA-RAMA: EARN REWARDS IN FORTNI...
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" xl="5" lg="5" md="6" sm="6">
        <div class="grid-item">
          <v-card :height="height" class="rounded-0">
            <v-img
              src="../assets/images/news/news2.jpg"
              width="100%"
              height="100%"
              class="d-flex align-end"
            >
              <v-card-title
                class="fs-font d-flex flex-column align-start custom mb-2 px-8"
              >
                <div class="date">MAR 23, 2021</div>
                <div class="main mt-1">
                  FORTNITE CREW: ALLI ARRIVES IN ARPIL
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <!-- 第二區 -->
    <v-row class="move-upper" align-content="center" justify="center">
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <div class="grid-item">
          <v-card :height="400" class="rounded-0">
            <v-img
              src="../assets/images/news/news3.jpg"
              width="100%"
              height="100%"
              class="d-flex align-end"
            >
              <v-card-title
                class="fs-font d-flex flex-column align-start custom mb-2 px-8"
              >
                <div class="date white--text">MAR 23, 2021</div>
                <div class="main mt-1 white--text">
                  Mystery at Croft Manor Experience
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <div class="grid-item">
          <v-card :height="400" class="rounded-0">
            <v-img
              src="../assets/images/news/news4.jpg"
              width="100%"
              height="100%"
              class="d-flex align-end"
            >
              <v-card-title
                class="fs-font d-flex flex-column align-start custom mb-2 px-8"
              >
                <div class="date white--text">MAR 23, 2021</div>
                <div class="main mt-1 white--text">
                  Catch the Kaskade Concert in Party Royale for the Next...
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <div class="grid-item">
          <v-card :height="400" class="rounded-0">
            <v-img
              src="../assets/images/news/news5.png"
              width="100%"
              height="100%"
              class="d-flex align-end"
            >
              <v-card-title
                class="fs-font d-flex flex-column align-start custom mb-2 px-8"
              >
                <div class="date white--text">MAR 23, 2021</div>
                <div class="main mt-1 white--text">
                  Six Tips for Fortnite Chapter 2 Season 6
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" xl="3" lg="3" md="6" sm="6">
        <div class="grid-item">
          <v-card :height="400" class="rounded-0">
            <v-img
              src="../assets/images/news/news6.jpg"
              width="100%"
              height="100%"
              class="d-flex align-end"
            >
              <v-card-title
                class="fs-font d-flex flex-column align-start custom mb-2 px-8"
              >
                <div class="date white--text">MAR 23, 2021</div>
                <div class="main mt-1 white--text">
                  RTiny Perspective Fortography Results!
                </div>
              </v-card-title>
            </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "NewsBlock",
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 400;
        case "sm":
          return 400;
        case "md":
          return 320;
        default:
          return 650;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.grid-item {
  height: 100%;
  overflow: hidden;
  background: grey;
  .v-image {
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 30%;
      background: linear-gradient(180deg, transparent 0, rgba(0, 0, 0, 0.35));
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
    .custom {
      min-height: 100px;
      color: white;
      transition: transform 0.3s ease-in-out;
      text-transform: uppercase;
      .main {
        font-size: 2rem;
      }
    }
  }

  &:hover {
    .v-image {
      transform: scale3d(1.05, 1.05, 1.05);
      &::after {
        opacity: 0;
      }
      .custom {
        transform: translateY(-20px);
      }
    }
  }
}
.move-upper {
  transform: translateY(-50px);
}
</style>
