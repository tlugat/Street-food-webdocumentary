<template>
  <div :key="this.$route.params.key" class="halfPage">
    <Title :title="this.$route.params.title" class="halfPage__title"></Title>
    <img class="halfPage__img" :src="img" />
    <div class="textContainer">
      <p v-if="text1">{{ text1 }}</p>
      <p v-if="text2">{{ text2 }}</p>
      <p v-if="text3">{{ text3 }}</p>
    </div>
  </div>
</template>

<script>
import Title from "../Utils/TheTitle/Title";

export default {
  props: {
    text1: String,
    text2: String,
    text3: String,
    img: String,
  },
  components: {
    Title,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.halfPage {
  // background: $black;
  width: 100%;
  &__img {
    width: 100%;
    height: 350px;
  }
  &__title {
    z-index: 1;
    padding: 2rem;
  }
  .textContainer {
    padding: 2rem;
    line-height: 150%;
    p {
      margin-bottom: 1rem;
    }
  }
}
</style>
