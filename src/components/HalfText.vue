<template>
  <div :key="this.$route.params.key" class="halfPage">
    <div class="halfPage__content">
      <Title :title="this.$route.params.title" class="title"></Title>
      <div class="textContainer">
        <p v-if="text1">{{ text1 }}</p>
        <p v-if="text2">{{ text2 }}</p>
        <p v-if="text3">{{ text3 }}</p>
      </div>
    </div>
    <img :src="img" class="halfPage__img" />
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
  @include medium {
    @include flex(row, flex-start, flex-start);
  }

  &__img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    order: 1;
    @include medium {
      height: 100vh;
      width: 40%;
    }
  }
  &__content {
    order: 2;
    @include medium {
      @include flex(column, center, flex-start);
    }
    .title {
      z-index: 1;
      padding: 1.5rem;
    }
    .textContainer {
      padding: 1.5rem;
      line-height: 16.5px;
      p {
        margin-bottom: 1rem;

        @include small {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
