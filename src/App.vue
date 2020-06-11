<template>
  <div id="app">
    <Menu class="menu"></Menu>
  </div>
</template>

<script>
import Menu from "./components/Utils/TheMenu/Menu";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
