<template>
  <div class="card">
    <img class="card__img" :src="data.img" />
    <p class="card__text">{{ data.description }}</p>
    <span class="card__number">{{ data.number }}</span>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.card {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 250px;
  height: 300px;
  background: $black;

  &__img {
    width: 100%;
  }
  &__text {
    font-size: 14px;
    padding: 5% 10%;
    color: #fff;
    font-weight: 300;
    line-height: 120%;
  }
  &__number {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #342f2f;
    font-size: 144px;
    z-index: -1;
    font-weight: bold;
  }
}
</style>
