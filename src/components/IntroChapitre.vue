<template>
  <div class="intro">
    <div class="intro__titleContainer">
      <p :class="`text${index + 1}`" :key="index" v-for="(n, index) in 4">
        {{ content[item].title }}
      </p>
    </div>
    <img class="intro__img" :src="content[item].img" />
    <span class="intro__number"> {{ content[item].number }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.$route.params.id - 1,
      content: [
        {
          title: `La street food c'est quoi ?`,
          img: `https://cdn.discordapp.com/attachments/697362929946722358/722870654205952030/mobileChap1.png`,
          number: 1,
        },
        {
          title: `La street food se "gastronomise"`,
          img: `https://cdn.discordapp.com/attachments/697362929946722358/722870674955173928/mobileChap2.png`,
          number: 2,
        },
      ],
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.item = this.$route.params.id - 1;
    next();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.intro {
  height: 100vh;
  overflow: hidden;
  &__titleContainer {
    height: 25vh;
    p {
      font-size: 30px;
      font-weight: bold;
    }
    .text1 {
      position: absolute;
      width: 120%;
      top: 2.5%;
    }
    .text2 {
      position: absolute;
      width: 120%;
      top: 10%;
      left: -60%;
    }
    .text3 {
      position: absolute;
      width: 120%;
      top: 10%;
      left: 75%;
    }
    .text4 {
      position: absolute;
      width: 120%;
      top: 17.5%;
      left: -25%;
    }
  }
  &__img {
    height: 75vh;
  }
  &__number {
    font-size: 150px;
    font-weight: bold;
    color: $yellow;
    position: absolute;
    bottom: -1.3rem;
    left: 1rem;
  }
}
</style>
