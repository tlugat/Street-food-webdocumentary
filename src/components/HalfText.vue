<template>
  <div>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: this.$route.params.text1,
      text2: this.$route.params.text2,
    };
  },
};
</script>

<style lang="scss" scoped></style>
