<template>
<div class="jay-fai">
  <h1>Jay Fai </h1>
  <img src="https://cdn.discordapp.com/attachments/697362929946722358/721752094654332968/jay_fai.png" alt="">
  <JayFaiCard 
  v-for="(jayfaicard, index) in jayfaicards"
    :key="index"
    :jayfaicard="jayfaicards[index].title" 
    :number="jayfaicards[index].number"
    :back="jayfaicards[index].back"
  ></JayFaiCard>
</div>
</template>

<script>
import JayFaiCard from "./Jay-FaiComponents/JayFaiCard";
export default {
  props: { 
  components: {
    JayFaiCard,
  },
  data () {
    return {
      jayfaicards: [
        {
          title: "En Famille",
          number: 1,
          back: {
            img: 
            "https://cdn.discordapp.com/attachments/656868877879345162/721852030594842754/fillejayfai.png",
            chiffre: 1,
            description: 
            "Ses deux filles ont démissionné de leur travailler afin d’aider leur mère à tenir le restaurant suite au prix qu’elle a reçu.",
          },
        },
      ],
    };
  },
}
}
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
