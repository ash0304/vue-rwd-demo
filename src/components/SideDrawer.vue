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
      <v-list-item v-for="(item, index) in menuItem" :key="index" :to="item.to" link>
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
        { title: "BATTLE PASS", to: "/BattlePass" },
        { title: "CREW", to: "/Crew" },
        { title: "V-BUCKS", to: "/VBucks" },
        { title: "COMPETITIVE", to: "/Competitive" },
        { title: "NEWS", to: "/News" },
        { title: "MERCH", to: "/Merch" },
        { title: "COSPLAY", to: "/Cosplay" },
        { title: "HELP", to: "/Help" },
      ],
      modes: [
        { id: 1, title: "BATTLE ROYALE", to: "/BattleRoyale" },
        { id: 2, title: "CREATIVE", to: "/Creative" },
        { id: 3, title: "SAVE THE WORLD", to: "/SaveTheWorld" },
      ],
    };
  },
};
</script>