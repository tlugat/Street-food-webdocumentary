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
    Recette,
  },
  data() {
    return {
      burgers: ["Le raffiné", "Le vegan", "Le sans gluten"],
      urls: [
        "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F03ab5e89-bad7-4a44-b952-b30c68934215.2Ejpeg/748x372/quality/80/crop-from/center/burger-maison.jpeg",
        "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY",
        "https://www.hervecuisine.com/wp-content/uploads/2020/04/burger-vegan-1280x720.jpg",
      ],
    };
  },
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
