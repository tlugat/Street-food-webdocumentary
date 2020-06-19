<template>
  <div class="intro">
    <div class="intro__titleContainer">
      <p :class="`text${index + 1}`" :key="index" v-for="(n, index) in 3">
        {{ content[item].title }}
      </p>
    </div>
    <div class="intro__media">
      <img class="intro__img" :src="content[item].img" />
    <span class="intro__number"> {{ content[item].number }} </span>
    </div>
    
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
          img: `https://cdn.discordapp.com/attachments/697362929946722358/723304211860684850/fond.png`,
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

  
  @include medium {
    @include flex(null, null, null);
  }

  &__titleContainer {
    height: 30vh;
    width: 100vw;

    @include medium {
      height: 100vh;
      width: 30vw;
    }
    p {
      font-size: 30px;
      font-weight: bold;
      @include medium{
        font-size: 70px;
        writing-mode: vertical-rl;
        text-orientation: mixed;
      }
    }
    .text1 {
      position: absolute;
      width: 120%;
      height: 100vh;
      top: 8%;
      @include medium{
        width:120%;
        top: 2%;
        left:-95%;
        color: $black;
      }
    }
    .text2 {
      position: absolute;
      width: 120%;
      height: 100vh;
      top: 15%;
      left: -60%;
      @include medium{
        top: 2%;
        left:-102%;
        color: #6AD051;
      }
    }
    .text3 {
      position: absolute;
      width: 120%;
      height: 100vh;
      top: 8%;
      @include medium{
        width:120%;
        top: 2%;
        left:-110%;
        color: $black;
      }
    }
  }
  &__media {
    width: 100vw;
    height: 75vh; 
    position: relative;
    @include medium {
      height: 100vh;
      width: 70vw;
    }
  }
  &__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    @include medium {
      
       
    }
  }
  &__number {
    font-size: 150px;
    font-weight: bold;
    color: $yellow;
    position: absolute;
    bottom: 0;
    left: 1rem;
    @include medium{
      font-size: 230px;
    }
  }
}
</style>
