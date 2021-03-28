<template>
  <v-app>
    <SideDrawer ref="sideDrawer" />
    <Header @toggleSideDrawer="toggleSideDrawer" />
    <v-main>
      <v-container fluid class="pa-0">
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


