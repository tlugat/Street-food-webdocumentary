<template>
  <div class="landing">
    <about-brands class="about__brands"></about-brands>
    <p class="about__btn" @click="slideAbout">ABOUT</p>
    <div class="globalTitles">
      <p class="globalTitles__subtitle">D'un mode de vie à une tendance</p>
      <h1 class="globalTitles__title">STREET FOOD</h1>
      <button class="startButton"> Place à la dégusation ! </button>
    </div>
    
    <div class="disclaimer">
      <div class="disclaimer__textWrapper">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 21.8337C5.01677 21.8337 0.166687 16.9836 0.166687 11.0003C0.166687 5.01708 5.01677 0.166992 11 0.166992C16.9833 0.166992 21.8334 5.01708 21.8334 11.0003C21.8334 16.9836 16.9833 21.8337 11 21.8337ZM11 19.667C13.2986 19.667 15.503 18.7539 17.1283 17.1286C18.7536 15.5033 19.6667 13.2989 19.6667 11.0003C19.6667 8.70178 18.7536 6.49738 17.1283 4.87207C15.503 3.24675 13.2986 2.33366 11 2.33366C8.70148 2.33366 6.49708 3.24675 4.87176 4.87207C3.24645 6.49738 2.33335 8.70178 2.33335 11.0003C2.33335 13.2989 3.24645 15.5033 4.87176 17.1286C6.49708 18.7539 8.70148 19.667 11 19.667ZM9.91669 14.2503H12.0834V16.417H9.91669V14.2503ZM9.91669 5.58366H12.0834V12.0837H9.91669V5.58366Z"
            fill="#ECECEC"
          />
        </svg>

        <p class="disclaimer__text">
          "Ce site a été réalisé à des fins pédagogiques dans le cadre du cursus
          Bachelor de l’école HETIC. Les contenus présentés n'ont pas fait
          l'objet d'une demande de droit d'utilisation. Ce site ne sera en aucun
          cas exploité à des fins commerciales et ne sera pas publié”
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutBrands from "../Utils/TheAbout/AboutBrands";
export default {
  components: {
    AboutBrands
  },
  data() {
    return {};
  },
  methods: {
    slideAbout() {
      document.querySelector(".about__brands").classList.toggle("open");
      document.querySelector(".about__btn").classList.toggle("black");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.landing {
  width: 100%;
  height: 100vh;
  background: url("../assets/img/landing-page/background-landing-small.png")
    no-repeat;
  @include medium {
    object-fit: cover;
    background: url("../assets/img/landing-page/background_home_desktop.png")
      no-repeat;
  }
  background-size: cover;
}
.menu {
  position: absolute;
  bottom: 0;
  right: 0;
}
.about {
  z-index: 10;
  &__brands {
    transform: translateY(-101%);
    transition: 1s;
  }
  &__brands.open {
    transform: translateY(0);
  }
  &__btn {
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    z-index: 10;
    color: #fff;
    @include medium {
      font-size: 18px;
    }
  }
}
.black {
  color: $black;
}
.globalTitles {
  @include flex(column, center, center);
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);
  color: #fff;
  &__title {
    font-size: 64px;
    text-align: center;
    width: auto;
    font-weight: bold;
    @include medium {
      font-size: 120px;
      width: 55rem;
    }
  }
  &__subtitle {
    font-size: 16px;
    width: auto;
    color: #f7b200;
    text-align: center;
    font-weight: 500;

    @include medium {
      font-size: 28px;
      width: auto;
      font-weight: 500;
    }
  }
  .startButton {
    position:absolute;
    padding: 1rem 2rem;
    background: none;
    color: white;
    border: solid 2px $green;
    bottom: -4rem;
    left: 50%;
    transform: translateX(-50%);
    @include medium {
      bottom: -6rem;
      font-size: 18px;
      transition: .2s;
      &:hover {
        background: $green;
      }
    }
  }
}
.disclaimer {
  width: 10rem;
  padding: 1rem 3rem;
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 11px;
  line-height: 150%;
  @include small {
    width: 20rem;
  }
  @include medium {
    width: 30rem;
    font-size: 12px;
  }
  &__textWrapper {
    position: relative;
    svg {
      position: absolute;
      top: 0;
      left: -2rem;
    }
  }
}
</style>
