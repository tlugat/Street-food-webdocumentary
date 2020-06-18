<template>
  <transition name="flip">
    <div class="card">
      <img class="card__img" :src="data.img" />
      <div class="traitJaune"></div>
      <p class="card__text">{{ data.description }}</p>
      <span class="card__number">{{ data.number }}</span>
      <svg
        @click="closeCard"
        class="card__close"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill="#fff"
          d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
        />
      </svg>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    closeCard() {
      this.$emit("close-card");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.card {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 250px;
  height: 300px;
  background: $black;
  @include flex(column, null, center);
  @include medium {
    width: 325px;
    height: 388px;
  }

  &__img {
    width: 95%;
    padding-top: 0.5rem;
  }
  .traitJaune {
    margin-top: 1rem;
    width: 10rem;
    height: 2px;
    background-color: $yellow;
  }
  &__text {
    font-size: 14px;
    padding: 5% 10%;
    width: 90%;
    color: #fff;
    font-weight: 300;
    line-height: 21px;
    text-align: center;

    @include medium {
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__number {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #342f2f;
    font-size: 144px;
    z-index: -1;
    font-weight: bold;
  }
  &__close {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.2s;
    &:hover {
      background: $green;
    }
    @include medium {
      width: 38px;
      height: 38px;
    }
  }
}
.flip-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.flip-enter,
.flip-leave-active {
  opacity: 0;
}
</style>
