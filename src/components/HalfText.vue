<template>
  <div class="halfPage">
    <Title class="halfPage__title"></Title>
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
  components: {
    Title,
  },
  data() {
    return {
      text1: this.$route.params.text1,
      text2: this.$route.params.text2,
      text3: this.$route.params.text3,
      img: this.$route.params.img,
    };
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
