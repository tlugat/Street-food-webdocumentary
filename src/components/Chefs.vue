<template>
  <div class="chefs-page">
    <Title :title="this.$route.params.title" class="chefs-page__title"></Title>
    <div class="chefs-page__cards">
      <ChefCard
        v-for="(chef, index) in chefs"
        :key="index"
        :chef="chefs[index].name"
        :url="chefs[index].url"
        :recette="chefs[index].recette"
        class="chefs-page__card"
      ></ChefCard>
    </div>
  </div>
</template>

<script>
import ChefCard from "./ChefsComponents/ChefCard";
import Title from "../Utils/TheTitle/Title";
export default {
  components: {
    ChefCard,
    Title,
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
  &__cards {
    @include large {
      @include flex(null, space-around, center);
    }
  }
  &__title {
    z-index: 1;
    padding: 2rem;
  }
  &__card {
    cursor: pointer;
  }
}
</style>
