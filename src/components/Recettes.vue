<template>
  <div>
  <recettesCTA v-for="(burger, index) in burgers"
      :key="index"
      :burger="burgers[index]"
      :url="urls[index]" ></recettesCTA>
  </div>
</template>

<script>
import RecettesCTA from "./RecettesComponent/recettesCTA";
export default {
  components:{
    RecettesCTA,
  },
  data(){
    return{
      burgers:[
        "Le raffiné","Le vegan","Le sans gluten"
      ],
      urls:[
        "https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F03ab5e89-bad7-4a44-b952-b30c68934215.2Ejpeg/748x372/quality/80/crop-from/center/burger-maison.jpeg",
        "https://www.la-viande.fr/sites/default/files/styles/slider_recettes/public/recettes/images/burger-de-hampe-de-boeuf-a-laustralienne.jpg?itok=91Hj2MMY",
        "https://www.hervecuisine.com/wp-content/uploads/2020/04/burger-vegan-1280x720.jpg"
      ],
      recipe:[
        " magret , pains à burger,tomates séchées,tranches de tome de brebis,tranches de salade,Confit d’oignon,Sel au piment d’Espelette",
        "œufs,oignons,gousses d’ail,pois chiches,huile d’olive,feuilles de salade, tomate, oignon rouge,tranches de fromage végétal,pains à hamburger,ketchup et/ou mayonnaise",
        "aubergine,Pesto (basilic, oignons de pin et huile d’olive),poignées de mâche,petit oignon rouge,Fromage de chèvre,pain sans gluten"
      ]
    }
  }
};
 
</script>
<style lang="sass" scoped>


</style>