<template>
  <div id="app" @click.stop="show = !show">
    <box-menu></box-menu>
    <transition>
      <menu-nav v-if="show"></menu-nav>
    </transition>
  </div>
</template>

<script>
import BoxMenu from "./MenuBox/Box";
import MenuNav from "./MenuBox/MenuNav";

export default {
  components: {
    BoxMenu,
    MenuNav,
  },
  name: "app",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.v-enter {
  opacity: 0;
  transform: translateX(20px);
}

.v-enter-to {
  opacity: 1;
}

.v-enter-active {
  transition: ease-in-out 300ms;
}
</style>
m
