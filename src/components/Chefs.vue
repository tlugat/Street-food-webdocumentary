<template>
  <div>
    <h1>test</h1>
    <ChefCTA
      v-for="(chef, index) in chefs"
      :key="index"
      :chef="chefs[index]"
      :url="urls[index]"
    ></ChefCTA>
  </div>
</template>

<script>
export default {
  components: {
    ChefCTA,
  },
  data() {
    return {
      chefs: [
        "Thierry Marx",
        "Christian Constant",
        "Akram Benallal",
        "Gregory Marchand",
      ],
      urls: [
        "https://static.cotemaison.fr/medias_11912/w_1364,h_2048,c_crop,x_84,y_0/w_400%2Ch_600%2Cc_fill%2Cg_center/portrait-du-chef-cuisinier-thierry-marx_6099167.jpg",
        "https://alchetron.com/cdn/wendy-beckett-8ee14307-2cf2-4c25-bbc4-08cbc3f858c-resize-750.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn0Xf4rbBFELui6f1698uAPZAcvZUbHzT74MPA5nwJK70o3WY6&usqp=CAU",
        "https://lh3.googleusercontent.com/proxy/wGlFSy9g6VJ762Hn-rcWGuU1Z7-MNMrdjwAs0lGiEKHX0WIjsPFzGOuNMc9q0BrvBg3p_mZ8URjQHACasDGf3uGtZjKCIclsPHtJJCP1ZChur3RIcRRF5mCh00BulRtMq6A",
      ],
    };
  },
};
import ChefCTA from "./ChefsComponents/ChefCTA";
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
</style>
