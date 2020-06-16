<template>
  <div class="recettes">
    <recettesCTA
      class="recette"
      v-for="(burger, index) in burgers"
      :key="index"
      :burger="burgers[index]"
      :url="urls[index]"
      :type="index"
    ></recettesCTA>
  </div>
</template>

<script>
import RecettesCTA from "./RecettesComponent/recettesCTA";
export default {
  components: {
    RecettesCTA,
  },
  data() {
    return {
      burgers: ["Le raffiné", "Le vegan", "Le sans gluten"],
      urls: [
        "https://cdn.discordapp.com/attachments/697362929946722358/722450266670235658/raffine.png",
        "https://cdn.discordapp.com/attachments/697362929946722358/722450301365518358/vegan.png",
        "https://cdn.discordapp.com/attachments/697362929946722358/722450341987221564/sansgluten.png",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/global.scss";

.recette {
  height: 15rem;
}

.recettes {
  width: 100%;
  background-color: $black;
  @include medium {
    @include flex(row, space-between, null);
    width: 33vw;
    height: 100%;
  }
}
</style>
