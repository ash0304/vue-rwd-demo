<template>
  <v-container fluid class="pt-16">
    <NewsBlock />
    <NewsBlock v-if="isShowMore" />
    <div v-if="!isShowMore" class="load-more d-flex justify-center align-center">
      <button class="fortnite-btn-normal" @click="isShowMore = true">
        <span>Load More</span>
      </button>
    </div>
  </v-container>
</template>
<script>
import NewsBlock from "../components/NewsBlock";
export default {
  name: "News",
  components: {
    NewsBlock,
  },
  data() {
    return {
      isShowMore: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.load-more {
  width: 100%;
  margin-top: -80px;
}
</style>
