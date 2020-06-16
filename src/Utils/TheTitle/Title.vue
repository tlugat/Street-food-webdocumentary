<template>
  <div>
    <div class="title-wrapper">
      <h2>{{ title }}</h2>
      <div class="square"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.title-wrapper {
  position: relative;
  font-size: $title-mobileFont;
  // @include flex(null, flex-end, null);
  width: 100%;

  h2 {
    font-size: 20px;
    padding-top: 5px;
    padding-left: 5px;

    @include medium {
      font-size: 40px;
      padding-top: 10px;
      padding-left: 10px;
    }
  }
  .square {
    height: 1.5rem;
    width: 1.5rem;
    background: $green;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    @include medium {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
}
</style>
