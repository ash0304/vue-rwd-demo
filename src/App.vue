<template>
  <v-app>
    <SideDrawer ref="sideDrawer" />
    <Header @toggleSideDrawer="toggleSideDrawer" />
    <v-main>
      <v-container fluid>
        <div class="fn">Fortnie</div>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import SideDrawer from "./components/SideDrawer";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    SideDrawer,
    Footer,
  },
  data() {
    return {
      sideNav: false,
    };
  },
  methods: {
    toggleSideDrawer() {
      this.$refs.sideDrawer.sideNav = !this.$refs.sideDrawer.sideNav;
    },
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: fortniteFonts;
  src: url("./assets/fonts/FortniteFont.otf");
}
.fn {
    font-family:fortniteFonts;
}
</style>

