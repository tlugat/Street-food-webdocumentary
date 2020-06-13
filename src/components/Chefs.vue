<template>
  <div class="chefs-page">
    <ChefCardFront
      v-for="(chef, index) in chefs"
      :key="index"
      :chef="chefs[index].name"
      :url="chefs[index].url"
      :recette="chefs[index].recette"
      class="chefs-page__card"
    ></ChefCardFront>
  </div>
</template>

<script>
import ChefCardFront from "./ChefsComponents/ChefCardFront";
export default {
  components: {
    ChefCardFront,
  },
  data() {
    return {
      chefs: [
        {
          name: "Thierry Marx",
          url:
            "https://cdn.discordapp.com/attachments/697362929946722358/721463263786958898/Thierry.png",
          recette: {
            name: "Marxito",
            description:
              "Des sandwich d’inspiration Japonaise pour renouveler la street food parisienne ",
            img:
              "https://cdn.discordapp.com/attachments/697362929946722358/721464037501698138/marxito.png",
          },
        },
        {
          name: "Christian Constant",
          url:
            "https://cdn.discordapp.com/attachments/697362929946722358/721463186376884224/christian.png",
          recette: {
            name: "Kebab",
            description:
              "Deliveroo, s'associe avec Christian Constant pour revisiter un plat street food, le kebab !",
            img:
              "https://cdn.discordapp.com/attachments/697362929946722358/721464074973741127/kebab.png",
          },
        },
        {
          name: "Akram Benallal",
          url:
            "https://cdn.discordapp.com/attachments/697362929946722358/721463153166254080/akram.png",
          recette: {
            name: "Panini",
            description:
              "« J'adore le panini. Il est bien pensé, fin, chaud, élégant, croustillant. »",
            img:
              "https://cdn.discordapp.com/attachments/697362929946722358/721464107060035584/panini.png",
          },
        },
        {
          name: "Gregory Marchand",
          url:
            "https://cdn.discordapp.com/attachments/697362929946722358/721463213283213382/gregory.png",
          recette: {
            name: "Sandwich",
            description:
              "Grégory Marchand, revisite le sandwich toasté au pastrami.",
            img:
              "https://cdn.discordapp.com/attachments/697362929946722358/721464138240360538/sandwich.png",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.chefs-page {
  @include xlarge {
    @include flex(null, space-around, center);
  }
}
</style>
