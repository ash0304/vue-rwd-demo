<template>
  <!-- 側邊導覽列 -->
  <v-navigation-drawer v-model="sideNav" temporary dark app>
    <v-list-group>
      <template v-slot:activator>
        <v-list-item-title>MODES</v-list-item-title>
      </template>
      <v-list-item v-for="(item, index) in modes" :key="index" :to="item.to" link>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list>
      <v-list-item v-for="(item, index) in menuItem" :key="index" link @click="toTarget(item)">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "SideDrawer",
  data() {
    return {
      sideNav: false,
      menuItem: [
        { title: "CREW", to: "/Crew" },
        { title: "NEWS", to: "/News" },
        { title: "MERCH", to: "/Merch", link: "https://www.amazon.com/fortnite" },
      ],
      modes: [
        { id: 1, title: "BATTLE ROYALE", to: "/BattleRoyale" },
        { id: 3, title: "SAVE THE WORLD", to: "/SaveTheWorld" },
      ],
    };
  },
  methods: {
    toTarget(item) {
      if (item.title === 'MERCH') {
        window.open(item.link, "_blank")
      }else {
        this.$router.push({
          path: item.to
        })
      }
    }
  }
};
</script>