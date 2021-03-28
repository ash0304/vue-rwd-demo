<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="12" class="pa-0">
        <Carousel />
        <NewsBlock />
        <PrimalBattlePass />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Carousel from "../components/Carousel";
import NewsBlock from "../components/NewsBlock";
import PrimalBattlePass from "../components/PrimalBattlePass"

export default {
  name: "Home",
  components: {
    Carousel,
    NewsBlock,
    PrimalBattlePass
  },
};
</script>
