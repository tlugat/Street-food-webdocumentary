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
    
      <h3 class="burger__title2">{{burger}}</h3>
      <ul>
      <li v-for="(ingredient,index) in types[type]" :key="index" class="burger__text">{{ ingredient }}</li>
      </ul>
   
  </div>
    </transition>
  </div>

</template>

<script>
export default {
   props: {
    burger: String,
    url: String,
    type:Number,
  },
  data() {
    return {
      cardFlipped: false,
      types:[
      [
        "magret",
        "pains à burger",
        "tomates séchées",
        "tranches de tome de brebis",
        "tranches de salade ",
        "Confit d’oignon",
        "Sel au piment d’Espelette"
        ],

        [
        "œufs",
        "oignons",
        "gousses d’ail",
        "pois chiches ",
        "huile d’olive ",
        "feuilles de salade",
        "tomate",
        "oignon rouge",
        "tranches de fromage végétal",
        "pains à hamburger",
        "ketchup et/ou mayonnaise",
        ],

        [
        "aubergine",
        "Pesto (basilic, oignons de pin et huile d’olive)",
        "poignées de mâche",
        "tranches de tome de brebis",
        " Fromage de chèvre ",
        "pain sans gluten",
        ]
      ]
    }
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
    @include flex(column, null, center);
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
  }
}
.burger{
  position: relative;
  width:100vw;
  
  &__title{
    @include flex(null, center, center);
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 25px;
    color: #fff;
    font-family: Helvetica;
    width: 12rem;
    transform: translate(-50%,-50%);
    z-index: 0;
  }
  &__title2{
    font-size: 25px;
    font-family: Helvetica;
    border-bottom: solid #f7b200 2px;
    margin-bottom: 1.5rem;
  }
  &__plus{
    position: absolute;
    top:70%;
    left: 50%;
    width: 30px;
    height: 30px;
    @include flex(null, center, center);
    font-size: 30px;
    color: #fff;
    z-index: 0;
    border: solid #f7b200 1px;
    align-content: center;
    transform: translate(-50%,-50%);

   
    
  }
  &__burger--back {
     box-shadow: 10px 0px 0px 0px black;
      .text {
        font-size: 11px;
        @include small {
          
        }
      }
  }
  &__img {
        width: 100vw ;
        height: 100%;
      }

  &__text{
      color: #000;
      text-align: left;
    }
}


  @include xlarge {
       
      }
</style>