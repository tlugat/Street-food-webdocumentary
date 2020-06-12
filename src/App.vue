<template>
  <div id="app">
    <Menu class="menu"></Menu>
    <LeSaviezVous class="anecdote"></LeSaviezVous>
    <AboutBrands class="about-brands"></AboutBrands>
  </div>
</template>

<script>
import Menu from "./components/Utils/TheMenu/Menu";
import LeSaviezVous from "./components/Utils/LeSaviezVous/LeSaviezVous";
import AboutBrands from "./components/Utils/TheAbout/AboutBrands";

export default {
  name: "App",
  components: {
    Menu,
    LeSaviezVous,
    AboutBrands
  }
};
</script>

<style lang="scss" scoped>
#app {
  .menu {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .anecdote {
    position: absolute;
    right: 0;
    top: 0;
  }

  .about-brands {
    position: absolute;
    top: 150px;
  }
}
</style>
