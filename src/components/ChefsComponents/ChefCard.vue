<template>
  <div @click="toggleCard" class="cardChef">
    <transition name="flip" mode="out-in">
      <div v-if="!cardFlipped" class="chef chef--front">
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
        <div class="chef__face">
          <h2>{{ chef }}</h2>
          <img class="chef__img" :src="url" alt />
        </div>
      </div>
    </transition>
    <transition name="flip" mode="out-in">
      <div v-if="cardFlipped" class="chef chef--back">
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
        <div class="chef__face chef__face--back">
          <img class="chef__img chef__img--back" :src="recette.img" alt />
          <div class="textWrapper">
            <p class="title">{{ recette.name }}</p>
            <p class="text">{{ recette.description }}</p>
          </div>
          <svg
            class="logo-couverts"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.9">
              <path
                d="M33.6763 28.4439C31.2531 26.4165 24.126 20.436 20.8584 17.5197C22.6284 15.8968 25.1051 13.4832 27.514 11.135C30.2718 8.44716 32.8773 5.90742 34.0587 4.90979C34.6568 4.40386 35 3.66135 35 2.87317C35 1.88552 34.4867 1.0097 33.6264 0.530847C32.7705 0.0548637 31.763 0.0783791 30.9305 0.59572C28.2431 2.26388 17.5001 9.98489 17.5001 11.6495C17.5001 12.1407 17.48 12.7182 17.3052 13.3735C16.502 11.9949 16.0418 10.732 16.0418 10.1901C16.0418 9.15187 12.5163 5.76988 5.56288 0.136826C5.27454 -0.0969616 4.79035 -0.0128801 4.52614 0.25078C4.24129 0.535837 4.24129 0.997602 4.52614 1.28259L11.4532 8.21474C11.7373 8.49904 11.7373 8.96224 11.4532 9.24655C11.1769 9.52162 10.6983 9.52162 10.4221 9.24655L3.49508 2.31447C3.21023 2.02941 2.74881 2.02941 2.46403 2.31447L2.33872 2.43991C2.05387 2.72497 2.05387 3.18673 2.33872 3.47172L9.26575 10.4039C9.54984 10.6882 9.54984 11.1514 9.26575 11.4357C8.98944 11.7108 8.51092 11.7108 8.23469 11.4357L1.3076 4.5036C1.02418 4.21998 0.500073 4.28198 0.213854 4.56628C-0.0503536 4.82994 -0.0724336 5.2511 0.162585 5.54108C5.79154 12.4995 9.171 16.0276 10.2085 16.0276C10.8275 16.0276 12.3839 16.6269 13.9837 17.6593C10.7506 20.5353 4.16104 26.07 1.32537 28.4425C0.482983 29.1473 0.000232014 30.1841 0.000232014 31.2872C0.000232014 33.3345 1.66436 34.9998 3.71014 34.9998C4.81175 34.9998 5.84848 34.516 6.55271 33.6723C8.98937 30.7571 14.6878 23.9627 17.5005 20.8118C20.4027 24.0649 26.4156 31.2412 28.4497 33.6751C29.1532 34.5174 30.1893 34.9998 31.2901 34.9998C33.3359 34.9998 35 33.3345 35 31.2872C35 30.1841 34.5173 29.148 33.6763 28.4439Z"
                fill="#231F20"
              />
            </g>
          </svg>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    chef: String,
    url: String,
    recette: Object
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
  transform: rotateY(180deg);
}

.cardChef {
  width: 270px;
  @include flex(null, center, center);
  padding-bottom: 1rem;

  @include medium {
    padding-top: 3rem;
  }

  .chef {
    width: 245px;
    height: 355px;
    position: relative;
    @include flex(null, center, center);
    /*@include medium {
      width: 165px;
      height: 245px;
    }*/
    @include small {
      width: 270px;
      height: 400px;
    }
    &__img {
      width: 99.9%;
      padding-bottom: 0.1px;
    }

    h3 {
      position: absolute;
      top: 60%;
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
    &__face {
      border: solid 2px $black;
      width: 225px;
      height: 335px;
      @include flex(null, null, flex-end);
      h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 120%);
        border-bottom: solid 2px $yellow;
        padding-bottom: 0.2rem;
      }

      /*@include medium {
        width: 150px;
        height: 230px;
      }*/

      @include small {
        width: 250px;
        height: 380px;
      }
    }
  }
  .chef--back {
    .chef__img--back {
      width: 95%;
      padding-top: 10px;
    }
    .chef__face--back {
      position: relative;
      @include flex(column, flex-start, center);
    }
    .textWrapper {
      @include flex(column, null, center);
      text-align: center;
      .title {
        font-size: 14px;
        border-bottom: solid 1px $yellow;
        padding: 0.5rem 0 0.2rem 0;
        margin-bottom: 0.5rem;

        @include small {
          font-size: 18px;
        }
      }
      .text {
        font-size: 11px;
        width: 200px;

        @include small {
          font-size: 14px;
          width: 220px;
        }
      }
    }
    .logo-couverts {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
