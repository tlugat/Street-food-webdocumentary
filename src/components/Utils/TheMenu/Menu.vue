<template>
<div>
  <box-menu ></box-menu>
  <menu-nav></menu-nav>
</div>
</template>

<script>
import BoxMenu from "./MenuBox/Box";
import MenuNav from "./MenuBox/MenuNav";

export default {
  components: {
    BoxMenu,
    MenuNav
  },
};
</script>

<style lang="scss" scoped></style>
