<template>
  <div :style="setBackground" class="fullPage">
    <div class="fullpage__background"></div>
    <div class="height">
      <Title
        v-if="title"
        :title="this.$route.params.title"
        s
        class="fullPage__title"
      ></Title>
      <div class="text-part">
        <div class="text-part__textContainer">
          <svg
            class="coinJ-right"
            width="91"
            height="89"
            viewBox="0 0 91 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.50195"
              y1="88.6855"
              x2="2.50196"
              y2="-0.000587876"
              stroke="#F7B200"
              stroke-width="5"
            />
            <line
              x1="2.18557e-07"
              y1="86.5"
              x2="90.4599"
              y2="86.5"
              stroke="#F7B200"
              stroke-width="5"
            />
          </svg>
          <svg
            class="coinJ-left"
            width="91"
            height="89"
            viewBox="0 0 91 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.50195"
              y1="88.6855"
              x2="2.50196"
              y2="-0.000587876"
              stroke="#F7B200"
              stroke-width="5"
            />
            <line
              x1="2.18557e-07"
              y1="86.5"
              x2="90.4599"
              y2="86.5"
              stroke="#F7B200"
              stroke-width="5"
            />
          </svg>
          <p class="text1">{{ text1 }}</p>
          <p v-if="text2">{{ text2 }}.</p>
          <button class="backbutton"> Retour au départ </button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../Utils/TheTitle/Title";

export default {
  components: {
    Title,
  },
  props: {
    text1: String,
    text2: String,
    title: String,
    background: String,
  },
  methods: {},
  computed: {
    setBackground() {
      return { background: `url(${this.background})`, backgroundSize: "cover" };
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/global.scss";
@import "@/assets/_fonts.scss";
.fullPage {
  color: #fff;
 &__background {
   position: absolute;
   top:50%;
   height: 100vh;
   background-color: $black;
   opacity: 50%;
   z-index: 10;
 }
  .height {
    height: 100vh;
  }
  &__title {
    padding: 2rem;
    color: white;
    font-size: 20px;
  }
  .backbutton {
    position:absolute;
    padding: 1rem 2rem;
    background: $yellow;
    color: white;
    border: none;
    //width: 50%;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
    @include medium {
      bottom: -6rem;
    }
  }
}
.text-part {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  @include medium {
    width: 60%;
  }
  &__textContainer {
    position: relative;
    text-align: center;
    line-height: 150%;
    padding: 1rem;
    font-size: 14px;
    font-family: poppins, sans-serif;
    font-weight: 400;
    font-style: normal;
     @include medium{
       font-size: $large-desktopText;
       padding: 2rem;
    }

    .text1 {
      margin-bottom: 2rem;
    }
  }
  .coinJ-right {
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(180deg);
  }
  .coinJ-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
