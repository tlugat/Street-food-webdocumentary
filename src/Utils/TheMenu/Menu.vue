<template>
  <div class="menu">
    <div @click="slideNav" class="menu__button">
      <p>
        ME
        <br />NU
      </p>
    </div>
    <menu-nav @display-landing="displayLanding" class="menu__nav"></menu-nav>
  </div>
</template>

<script>
import MenuNav from "./MenuBox/MenuNav";

export default {
  components: {
    MenuNav,
  },
  methods: {
    slideNav() {
      document.querySelector(".menu__nav").classList.toggle("open");
    },
    displayLanding() {
      this.$emit("display-landing");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.menu {
  position: relative;
  &__button {
    background: $green;
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
    color: white;
    @include flex(null, center, center);
    cursor: pointer;
  }
  &__nav {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
    transition: 1s;
  }
}
.menu__nav.open {
  transform: translateX(0);
}
</style>
