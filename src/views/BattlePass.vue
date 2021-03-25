<template>
  <div> BattlePass 
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test test2"></div>
  </div>
</template>
<script>
export default {
  name: "BattlePass",
};
</script>
<style lang="scss" scoped>
.test {
    width: 200px;
    height: 400px;
    background: red;
    margin-top: 20px;
    &.test2 {
        background: green;
    }
}
</style>