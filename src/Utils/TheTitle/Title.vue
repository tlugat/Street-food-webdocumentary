<template>
  <div>
    <div class="title-wrapper">
      <h2>Les origines des <br />cantines de rue</h2>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.title-wrapper {
  position: relative;
  font-size: $title-mobileFont;
  @include flex(null, flex-end, null);
  width: 100%;
  .square {
    height: 1.5rem;
    width: 1.5rem;
    background: $green;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
}
</style>
