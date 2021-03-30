<template>
  <!-- 主導覽列 -->
  <v-app-bar app dark height="50px">
    <v-app-bar-nav-icon
      @click="toggleSideDrawer"
      class="hidden-md-and-up"
    ></v-app-bar-nav-icon>
    <v-toolbar-title @click="toHome">
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
            link
            :to="mode.to"
          >
            {{ mode.title }}
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- OTHERS -->
      <v-btn v-for="item in menuItem" :key="item.title" router @click="toTarget(item)">
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
        { title: "CREW", to: "/Crew" },
        { title: "V-BUCKS", to: "/VBucks" },
        { title: "NEWS", to: "/News" },
        { title: "MERCH", to: "/Merch", link: "https://www.amazon.com/fortnite" },
        { title: "COSPLAY", to: "/Cosplay" },
        { title: "HELP", to: "/Help" },
      ],
      modes: [
        { id: 1, title: "BATTLE ROYALE", to: "/BattleRoyale" },
        { id: 2, title: "SAVE THE WORLD", to: "/SaveTheWorld" },
      ],
    };
  },
  methods: {
    toggleSideDrawer() {
      this.$emit("toggleSideDrawer");
    },
    toHome() {
      this.$router.push({
        name: 'Home'
      })
    },
    toTarget(item) {
      if (item.title === 'MERCH') {
        window.open(item.link, "_blank")
      }else {
        this.$router.push({
          path: item.to
        })
      }
    }
  },
};
</script>
<style scoped>
.list-custom-item {
  color: white;
}
</style>