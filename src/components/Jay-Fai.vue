<template>
  <div class="jay-fai">
    <h1>Jay Fai</h1>
    <img
      src="https://cdn.discordapp.com/attachments/697362929946722358/721752094654332968/jay_fai.png"
      alt=""
    />
  </div>
</template>

<script>
import JayTag from "./JayTag";
export default {
  props: {
    components: {
      JayTag,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.jay-fai {
  @include flex(column, center, center);
  h1 {
    font-size: 72px;
    margin-top: 18px;
    color: transparent;
    -webkit-text-stroke: 2px #d1d1d1;
  }
  img {
    width: 230px;
    margin-top: 56px;
  }
}
</style>
