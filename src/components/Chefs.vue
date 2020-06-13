
<template>
  <div>
    <h1>test</h1>
    <ChefCTA
      title="Thierry Marx"
      url="https://static.cotemaison.fr/medias_11912/w_1364,h_2048,c_crop,x_84,y_0/w_400%2Ch_600%2Cc_fill%2Cg_center/portrait-du-chef-cuisinier-thierry-marx_6099167.jpg"
    ></ChefCTA>
    <ChefCTA
      title="Wendy Paulos"
      url="https://alchetron.com/cdn/wendy-beckett-8ee14307-2cf2-4c25-bbc4-08cbc3f858c-resize-750.jpeg"
    ></ChefCTA>
  </div>
</template>

<script>
export default {
  name: "Chefs",
  components: {
    ChefCTA
  },

  data() {
    return {};
  }
};
import ChefCTA from "./ChefsComponents/ChefCTA";
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
</style>

