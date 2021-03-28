<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0" style="position: relative">
        <img
          src="../assets/images/home/battlepass-chapter-2-season-6.png"
          style="width: 100%; vertical-align: moddle; border: 0;"
        />
        <div class="box-1"></div>
        <div class="box-2">
          <div class="btn-area">
            <button class="fortnite-btn custom-btn">
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "PrimalBattlePass",
};
</script>
<style lang="scss" scoped>
.box-1 {
  position: absolute;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.btn-area {
  width: 100%;
  position: absolute;
  bottom: 8%;
  margin: 0px auto 2vw;
  text-align: center;
}
</style>
