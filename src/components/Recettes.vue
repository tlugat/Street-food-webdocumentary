<template>
  <div class="recettes">
    <recette
      class="recette"
      v-for="(burger, index) in burgers"
      :key="index"
      :burger="burgers[index]"
      :url="urls[index]"
      :type="index"
    ></recette>
  </div>
</template>

<script>
import Recette from "./RecettesComponent/Recette";
export default {
  components: {
    Recette
  },
  data() {
    return {
      burgers: ["Le raffiné", "Le vegan", "Le sans gluten"],
      urls: [
        "https://cdn.discordapp.com/attachments/697362929946722358/722450266670235658/raffine.png",
        "https://cdn.discordapp.com/attachments/697362929946722358/722450301365518358/vegan.png",
        "https://cdn.discordapp.com/attachments/697362929946722358/722450341987221564/sansgluten.png"
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/global.scss";

.recette {
  height: 15rem;
  &:nth-child(-n + 2) {
    @media (max-width: 767px) {
      margin-bottom: 0.3rem;
    }
  }
}

.recettes {
  width: 100%;
  @include flex(column, space-between, null);
  @include medium {
    @include flex(row, space-between, null);
    height: 100%;
  }
}
</style>
