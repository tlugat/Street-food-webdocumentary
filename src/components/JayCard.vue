<template>
<div class="cards">
  <img :src="card.img"/>
  <p>{{card.description}}</p>
</div>
</template>

<script>
export default {
  props: {
    data: Object,
  }
}
</script>

<style lang="scss" scoped>
  .cards{
    position: absolute;
    top: 0;
    left:0;
    z-index: 1000;
    width: 250px;
    height: 255px;
  }
</style>