<template>
  <!-- 主導覽列 -->
  <v-app-bar app color="gray" dark>
    <v-app-bar-nav-icon
      @click="toggleSideDrawer"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>
    <v-toolbar-title :to="'/'">
      <v-img
        class="shrink mt-1"
        contain
        min-width="100"
        src="../assets/images/home/logo.png"
        width="100"
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- MODES subselect -->
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">MODES</v-btn>
        </template>
        <v-list dense dark>
          <v-list-item
            v-for="mode in modes"
            :key="mode.id"
            class="list-custom-item"
            :to="mode.to"
          >
            {{ mode.title }}
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- OTHERS -->
      <v-btn v-for="item in menuItem" :key="item.title" router :to="item.to">
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
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
  methods: {
    toggleSideDrawer() {
      this.$emit("toggleSideDrawer");
    },
  },
};
</script>
<style scoped>
.list-custom-item {
  color: white;
}
</style>