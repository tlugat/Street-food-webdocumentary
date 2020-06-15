<template>
  <div  @click="toggleCard" class="recettes">
    <transition name="flip">
  <div v-if="!cardFlipped"  class="burger">
    <h2 class="burger__title">{{burger}}</h2>
    <img class="burger__img" :src="url" alt />
    <div  class="burger__plus">
       <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1816 6.67969H23.8184C24.0527 6.67969 24.1699 6.79687 24.1699 7.03125V37.9688C24.1699 38.2031 24.0527 38.3203 23.8184 38.3203H21.1816C20.9473 38.3203 20.8301 38.2031 20.8301 37.9688V7.03125C20.8301 6.79687 20.9473 6.67969 21.1816 6.67969Z" fill="#ECECEC"/>
      <path d="M7.73438 20.8301H37.2656C37.5 20.8301 37.6172 20.9473 37.6172 21.1816V23.8184C37.6172 24.0527 37.5 24.1699 37.2656 24.1699H7.73438C7.5 24.1699 7.38281 24.0527 7.38281 23.8184V21.1816C7.38281 20.9473 7.5 20.8301 7.73438 20.8301Z" fill="#ECECEC"/>
      </svg>
    </div>
  </div>
    </transition>
    <transition name="flip">
  <div  v-if="cardFlipped" class="recettes recettes--back">
    <div class="burger burger--back">
      <h3 class="burger__title2">{{burger}}</h3>
      <p class="burger__text">{{ recipe }}</p>
    </div>
  </div>
    </transition>
  </div>
</template>

<script>
export default {
   props: {
    burger: String,
    url: String,
    recipe:String,
  },
  data() {
    return {
      cardFlipped: false
    };
  },
    methods: {
    toggleCard() {
      this.cardFlipped = !this.cardFlipped;
    }
  }
};

</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.flip-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.flip-enter,
.flip-leave-active {
  opacity: 0;
  transform: translateX(50px);
}
.recettes{
  @include flex(null, center, center);
  .recettes--back{
    background-color: #fff;
    align-items: center;
    transform: translateX(-50%,-50%);
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 220px;
  }
}
.burger{
  position: relative;
  width:100vw;
  

  &__title{
    position:absolute;
    @include flex(null, center, center);
    font-size: $title-font;
    color: #fff;
    font-family: Helvetica;
  }
  &__title2{
    position:absolute;
    top: 0;
    right: 5%;
    font-size: $title-font;
    color: #000;
    font-family: Helvetica;
    border-bottom: solid #f7b200 2px;
  }
  &__plus{
    position: absolute;
    top:70%;
    left: 45%;
    width: 30px;
    height: 30px;
    @include flex(null, center, center);
    font-size: 30px;
    color: #fff;
    z-index: 0;
    border: solid #f7b200 1px;
    align-content: center;
    transform: translateX(-50%,-50%);

    p{
      transform: translateX(-50%,-50%);
    }
    
  }
  &__burger--back {
     box-shadow: 10px 0px 0px 0px black;
      .text {
        font-size: 11px;

        @include small {
          font-size: 14px;
          width: 220px;
        }
      }
  }

  &__text{
      margin: 20% 0% 20% 5%;
      color: #000;
      text-align: left;
    }


  h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-bottom: solid 2px $yellow;
        padding-bottom: 0.2rem;
      }
  img {
        width: 100vw ;
        height: 185px;
      }

}

  @include xlarge {
        .burger{
          display: flex;
          flex-direction: column;
          width: 423px;
          height: 750px;

        }
      }
</style>