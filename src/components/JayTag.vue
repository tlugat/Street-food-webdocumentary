<template>
<div>
  <div class="tags">
  <h2 class="tags__title">{{ title }}</h2>
  <p class="tags__number">{{ number }}</p>
  </div>
</div>
</template>

<script>

export default {
  props: {
    title: String,
    number: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.tags{
  cursor: pointer;
  position: relative;
  width: 8.5rem;
  height: 26px;
  font-size: 14px;
  background-color: $yellow;
  margin-bottom: 50%;
  text-align: center;

  &__number{
    color:#fff;
    position: absolute;
    top: 0;
    left:80%;
    margin-left:5%;
    font-size: 48px;
    height: 20rem;
    font-weight: bold;

  }
}
</style>
