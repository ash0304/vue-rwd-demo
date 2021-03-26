<template>
  <v-container fluid class="px-lg-16 px-md-16 px-sm-0 red test">
    <!-- 第一區 -->
    <v-row class="yellow test" align-content="center" justify="center">
      <v-col cols="12" xl="8" lg="8" md="6" sm="12">
        <div class="box">
            <div data-aos="fade-up">ABC</div>
        </div>
      </v-col>
      <v-col cols="12" xl="4" lg="4" md="6" sm="12">
        <div class="box"></div>
      </v-col>
    </v-row>
    <!-- 第二區 -->
    <v-row class="purple" align-content="center" justify="center">
      <v-col  cols="12" xl="3" lg="3" md="6" sm="12">
        <div class="box2"></div>
      </v-col>
      <v-col  cols="12" xl="3" lg="3" md="6" sm="12">
        <div class="box2"></div>
      </v-col>
      <v-col  cols="12" xl="3" lg="3" md="6" sm="12">
        <div class="box2"></div>
      </v-col>
      <v-col  cols="12" xl="3" lg="3" md="6" sm="12">
        <div class="box2"></div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "NewsBlock",
};
</script>
<style lang="scss" scoped>
.box {
  height: 648px;
  background: grey;
  border: 1px solid yellow;
}
.box2 {
  height: 403px;
  background: grey;
  border: 1px solid green;
}
.test {
    transform: translateY(-50px);
}
</style>
