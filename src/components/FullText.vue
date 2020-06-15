<template>
  <div class="fullPage">
    <Title
      v-if="title"
      :title="this.$route.params.title"
      s
      class="fullPage__title"
    ></Title>
    <div class="text-part">
      <div class="text-part__textContainer">
        <p>
          {{ text1 }}
        </p>
        <p v-if="text2">{{ text2 }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Utils/TheTitle/Title";
export default {
  components: {
    Title,
  },
  props: {
    text1: String,
    text2: String,
    title: String,
  },
  methods: {},
};
</script>

<style lang="scss">
.fullPage {
  &__title {
    padding: 2rem;
  }
}
.text-part {
  height: 100%;
  display: flex;
  align-items: center;
  &__textContainer {
    position: relative;
    line-height: 150%;
    padding: 1rem;
    p {
      margin-bottom: 2rem;
    }
  }
}
</style>
