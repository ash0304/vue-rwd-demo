<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pa-0" style="position: relative">
        <img
          src="../assets/images/home/battlepass-chapter-2-season-6.png"
          style="width: 100%; vertical-align: moddle; border: 0"
        />
        <div class="box-1">
          <div class="pr-big-logo">
            <img src="../assets/images/home/en-1767x421.png" />
          </div>
          <div class="bp-text">
            <h5 class="fs-font">Battle Pass</h5>
          </div>
        </div>
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
  > div {
    width: 50vw;
  }
  .pr-big-logo {
    margin-left: 0px;
    text-align: center;
    margin-top: 7em;
    img {
      width: 75%;
      vertical-align: middle;
      border: 0;
    }
  }
  .bp-text {
    color: black;
    text-align: center;
    font-style: italic;
    h5 {
      font-size: 3em;
    }
  }
}
.btn-area {
  width: 100%;
  position: absolute;
  bottom: 8%;
  margin: 0px auto 2vw;
  text-align: center;
}
@media screen and (max-width: 1024px) {
  .box-1 {
    > div {
      width: 55vw;
    }
  }
}
@media screen and (max-width: 2000px) {
  .box-1 {
    .pr-big-logo {
      margin-top: 10em;
    }
  }
}
@media screen and (max-width: 1440px) {
  .box-1 {
    .pr-big-logo {
      margin-top: 7em;
    }
  }
}
@media screen and (max-width: 1200px) {
  .box-1 {
    .pr-big-logo {
      margin-top: 10%;
    }
    .bp-text {
      h5 {
        font-size: 2em;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .box-1 {
    .bp-text {
      h5 {
        font-size: 1.5em;
      }
    }
  }
}
</style>
