<template>
<div class="jay-fai">
  <h1>Jay Fai </h1>
  <img src="https://cdn.discordapp.com/attachments/697362929946722358/721752094654332968/jay_fai.png" alt="">
  <JayFaiCard></JayFaiCard>
</div>
</template>

<script>
import JayFaiCard from "./Jay-FaiComponents/JayFaiCard";
export default {
  components: {
    JayFaiCard,
  }
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
    -webkit-text-stroke: 2px #D1D1D1;
  }
  img {
    width: 230px;
    margin-top: 56px;
  }
}
</style>
