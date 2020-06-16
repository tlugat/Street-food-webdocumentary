<template>
  <div :key="this.$route.params.key" class="halfPage">
    <div class="halfPage__content">
      <Title :title="title" class="title"></Title>
      <div class="textContainer">
        <p v-if="text1">{{ text1 }}</p>
        <p v-if="text2">{{ text2 }}</p>
        <p v-if="text3">{{ text3 }}</p>
        <le-saviez-vous
          @slide-in-lsv="slideInLsv"
          @slide-out-lsv="slideOutLsv"
          class="lsv"
          v-if="lsv"
          :lsv="lsv"
        ></le-saviez-vous>
      </div>
    </div>
    <img :src="img" class="halfPage__img" />
  </div>
</template>

<script>
import Title from "../Utils/TheTitle/Title";
import LeSaviezVous from "../Utils/LeSaviezVous/LeSaviezVous";
export default {
  props: {
    text1: String,
    text2: String,
    text3: String,
    img: String,
    title: String,
    lsv: String,
  },
  components: {
    Title,
    LeSaviezVous,
  },
  methods: {
    slideInLsv() {
      document.querySelector(".lsv").style.transform = "translateX(0)";
    },
    slideOutLsv() {
      document.querySelector(".lsv").style.transform = "translateX(85%)";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.lsv {
  position: absolute;
  right: 0;
  transform: translateX(85%);
  transition: 0.4s ease-in-out;
}

.halfPage {
  // background: $black;
  width: 100%;
  @include medium {
    @include flex(row, flex-start, flex-start);
  }

  &__img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    order: 1;
    @include medium {
      height: 100vh;
      width: 40%;
    }
  }
  &__content {
    order: 2;
    @include medium {
      @include flex(column, center, flex-start);
    }
    .title {
      z-index: 1;
      padding: 1.5rem;
      @include medium {
        padding-left: 4.5rem;
      }
    }
    .textContainer {
      padding: 1.5rem;
      line-height: 21px;
      @include medium {
        width: 80%;
        line-height: 24px;
        padding-left: 4.5rem;
      }
      p {
        margin-bottom: 1rem;
        font-size: 14px;
        @include medium {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
