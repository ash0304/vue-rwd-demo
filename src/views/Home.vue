<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="12" class="pa-0">
        <Carousel />
        <NewsBlock />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Carousel from "../components/Carousel";
import NewsBlock from "../components/NewsBlock";

export default {
  name: "Home",
  components: {
    Carousel,
    NewsBlock,
  },
};
</script>
