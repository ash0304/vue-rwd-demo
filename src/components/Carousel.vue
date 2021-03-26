<template>
  <v-carousel
    v-model="model"
    :continuous="false"
    :cycle="true"
    hide-delimiters
    :height="'auto'"
  >
    <v-carousel-item v-for="(item, index) in carouselItem" :key="index">
      <v-sheet height="100%" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div :style="carouselObj(item)"></div>
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
      height: "900px",
      carouselItem: [
        {
          src: require(`../assets/images/home/carousel01.jpg`),
        },
        {
          src: require(`../assets/images/home/carousel02.jpg`),
        },
        {
          src: require(`../assets/images/home/carousel03.jpg`),
        },
      ],
    };
  },
  methods: {
    carouselObj(item) {
      return {
        width: "100%",
        height: "100%",
        'min-height': '488px',
        background: `url(${item.src})`,
        "background-position": "center center",
        "background-size": "cover",
        "padding-top": "56.25%",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
</style>