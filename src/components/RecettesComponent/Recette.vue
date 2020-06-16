<template>
  <div class="recettes">
    <transition name="flip">
      <div v-if="!cardFlipped" class="burger">
        <h2 class="burger__title">{{ burger }}</h2>
        <img class="burger__img" :src="url" alt />
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
          width="36"
          height="36"
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
          "Pesto (+ pignons de pin)",
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
  @include medium {
    width: 100%;
  }
  &__plus {
    cursor: pointer;
    transition: 0.4s ease-in-out;
    &:hover {
      transform: rotate(180deg);
    }
  }
  .recettes--back {
    @include flex(column, flex-start, center);
    position: relative;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 100vw;

    @include medium {
      width: 100%;
    }
    &__close {
      position: absolute;
      top: 5%;
      left: 80%;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        transform: rotate(180deg);
        background: $green;
        fill: #fff;
      }
    }
  }
}
.burger {
  position: relative;
  width: 100%;
  height: 100%;

  &__title {
    @include flex(null, center, center);
    position: absolute;
    top: 40%;
    left: 50%;
    font-weight: 700;
    color: #fff;
    width: 19rem;
    transform: translate(-50%, -50%);
    z-index: 1;
    border-bottom: solid 2px $yellow;
    font-size: 24px;
    @include medium {
      font-size: $title-font;
    }
  }
  &__title2 {
    border-bottom: solid $yellow 2px;
    padding-bottom: 0.5rem;
    margin: 5% 0;
    position: relative;
    font-size: 24px;
    @include medium {
      font-size: $title-font;
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
    border: solid $yellow 2px;
    align-content: center;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    &:hover {
      background: $yellow;
    }
    @include medium {
      border: solid $yellow 3px;
      font-size: 90px;
      width: 50px;
      height: 50px;
    }
  }

  &__img {
    width: 100vw;
    height: 100%;
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
    transition: ease-in-out 0.2s;
  }

  &__text {
    color: #000;
    text-align: left;
    position: relative;

    @include medium {
      margin-top: 10%;
      font-size: 18px;
    }
    &::before {
      content: "";
      position: absolute;
      left: -2rem;
      top: 50%;
      transform: translateY(-50%);
      height: 0.8rem;
      width: 0.8rem;
      background: $green;
    }
  }
}
</style>
