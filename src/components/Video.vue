<template>
  <div class="height">
    <div class="video">
      <h1 class="video__title">Revisite du Club Sandwich by Thierry Marx</h1>
      <video
        class="video"
        src="../assets/videos/le-club-sandwich-revisite.mp4"
        autoplay
        loop
      >
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayTitle: false,
    };
  },
  methods: {
    // displayTitle() {
    //   // document.querySelector('.video__title').addEventListener
    // }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/global.scss";
.height {
  height: 100vh;
  width: 100vw;
}
.video {
  width: 100%;
  height: 100%;
  &__title {
    font-size: $title-font;
    position: absolute;
    z-index: 100;
    font-weight: bold;
    top: 0;
    left: 0;
    color: $yellow;
    opacity: 0;
    transition: 0.2s;
    padding: 2rem;
    width: 100%;
    cursor: default;
    background: rgba(0, 0, 0, 0.137);

    &:hover {
      opacity: 1;
    }
  }
}

.video {
  position: absolute;
  object-fit: cover;
  width: 100%;
}
</style>
