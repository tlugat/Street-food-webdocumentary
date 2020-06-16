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
    font-size: 22px;
    padding-top: 5px;
    padding-left: 5px;
    line-height: 33px;
    font-weight: bold;

    @include medium {
      width: 75%;
      font-size: 40px;
      padding-top: 15px;
      padding-left: 20px;
      line-height: 40px;
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
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>
