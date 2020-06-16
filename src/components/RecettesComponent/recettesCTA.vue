<template>
  <div class="recettes">
    <transition name="flip">
      <div v-if="!cardFlipped" class="burger">
        <h2 class="burger__title">{{ burger }}</h2>
        <img class="burger__img" :src="url" alt style= "opacity:70%"/>
        <div class="burger__plus">
          <svg
            @click="toggleCard"
            class="recettes__plus"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1816 6.67969H23.8184C24.0527 6.67969 24.1699 6.79687 24.1699 7.03125V37.9688C24.1699 38.2031 24.0527 38.3203 23.8184 38.3203H21.1816C20.9473 38.3203 20.8301 38.2031 20.8301 37.9688V7.03125C20.8301 6.79687 20.9473 6.67969 21.1816 6.67969Z"
              fill="#ECECEC"
            />
            <path
              d="M7.73438 20.8301H37.2656C37.5 20.8301 37.6172 20.9473 37.6172 21.1816V23.8184C37.6172 24.0527 37.5 24.1699 37.2656 24.1699H7.73438C7.5 24.1699 7.38281 24.0527 7.38281 23.8184V21.1816C7.38281 20.9473 7.5 20.8301 7.73438 20.8301Z"
              fill="#ECECEC"
            />
          </svg>
        </div>
      </div>
    </transition>
    <transition name="flip">
      <div v-if="cardFlipped" class="recettes recettes--back">
        <h3 class="burger__title2">{{ burger }}</h3>
        <ul>
          <li
            v-for="(ingredient, index) in types[type]"
            :key="index"
            class="burger__text"
          >
            {{ ingredient }}
          </li>
        </ul>
        <svg
          @click="toggleCard"
          class="recettes--back__close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
          />
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    burger: String,
    url: String,
    type: Number,
  },
  data() {
    return {
      cardFlipped: false,
      types: [
        [
          "magret",
          "pains à burger",
          "tomates séchées",
          "tranches de tome de brebis",
          "tranches de salade ",
          "Confit d’oignon",
          "Sel au piment d’Espelette",
        ],

        [
          "oignons",
          "gousses d’ail",
          "pois chiches ",
          "huile d’olive ",
          "feuilles de salade",
          "tomate",
          "pain burger",
          "oignon rouge",
          "tranches de fromage végétal",
        ],

        [
          "aubergine",
          "Pesto (basilic, oignons de pin et huile d’olive)",
          "poignées de mâche",
          "tranches de tome de brebis",
          " Fromage de chèvre ",
          "pain sans gluten",
        ],
      ],
    };
  },
  methods: {
    toggleCard() {
      this.cardFlipped = !this.cardFlipped;
    },
  },
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

.recettes {
  // @include flex(null, center, center);
  @include medium {
    width: 100%;
  }
  &__plus {
    cursor: pointer;
  }
  .recettes--back {
    @include flex(column, null, center);
    position :relative;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;
    background-color: #fff;
    @include medium {
      width: 100%;
    }
    &__close{
      position: absolute;
      top: 5%;
      left:80%;
      cursor: pointer;
    }
  }
}
.burger {
  position: relative;
  width: 100%;

  &__title {
    @include flex(null, center, center);
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    font-family: Helvetica;
    width: 18rem;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  &__title2 {
    font-size: 25px;
    font-family: Helvetica;
    border-bottom: solid #f7b200 2px;
    margin-bottom: 1.5rem;
    margin-top: 5%;
    @include medium{
      margin-top:20%;
    } 
  }
  &__plus {
    position: absolute;
    top: 70%;
    left: 50%;
    width: 30px;
    height: 30px;
    @include flex(null, center, center);
    font-size: 30px;
    color: #fff;
    z-index: 0;
    border: solid #f7b200 1px;
    align-content: center;
    transform: translate(-50%, -50%);

     @include medium{
      border: solid #f7b200 3px;
      font-size: 90px;
      width: 50px;
      height: 50px;
    } 
  }

  // &__plus:hover{
  //   transform-origin: 45% 45%;
  //   transform: rotate(180deg);
  //   transition: .8s ease-in-out;
  // }
   
  &__img {
    width: 100vw;
    height: 33vh;
    object-fit: cover;
    filter: grayscale(1);
    -webkit-filter: grayscale(1);

    @include medium {
      width: 33vw;
      height: 100vh;
    }
  }
  &__img:hover {
      filter: grayscale(0);
      -webkit-filter: grayscale(0);
      transition: ease-in-out 1s;
    }

  &__text {
    color: #000;
    text-align: left;
    @include medium{
       margin-top: 10%;
    }
  }
}

@include xlarge {
}
</style>
