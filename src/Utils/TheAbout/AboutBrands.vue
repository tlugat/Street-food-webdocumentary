<template>
  <div class="about">
    <div class="about__section about__section--1">
      <div class="about__titleWrapper">
        <h3 class="about__title">À propos du projet</h3>
        <div class="about__square"></div>
      </div>
      <p>
        Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque
        adrogantis ingenii, considerans incitationem eius ad multorum augeri
        discrimina, non maturitate vel consiliis mitigabat.
      </p>
    </div>
    <div class="about__section about__section--2">
      <div class="about__titleWrapper">
        <h3 class="about__title">Crédits</h3>
        <div class="about__square"></div>
      </div>
      <div class="credits">
        <div class="credits__part">
          <div class="credits__item">
            <p>Téo Lugat</p>
            <p class="expertise">Front-end</p>
          </div>
          <div class="credits__item">
            <p>Kylian Mendy</p>
            <p class="expertise">Design/Front-end</p>
          </div>
          <div class="credits__item">
            <p>Wendy Paulos</p>
            <p class="expertise">Design/Front-end</p>
          </div>
        </div>
        <div class="credits__part">
          <div class="credits__item">
            <p>Michael Vieira</p>
            <p class="expertise">Design/Front-end</p>
          </div>
          <div class="credits__item">
            <p>Emmy Peteytas</p>
            <p class="expertise">Design/Front-end</p>
          </div>
          <div class="credits__item">
            <p>Imene Ben Rachid</p>
            <p class="expertise">Design/Front-end</p>
          </div>
        </div>
      </div>
    </div>
    <div class="trait"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";

.about {
  padding: 2rem 1rem;
  position: relative;
  // font-family: poppins-regular;

  @include large {
    display: flex;
  }
  &__section {
    @include large {
      width: 50%;
      padding: 2rem;
    }
  }

  &__titleWrapper {
    position: relative;
    margin-bottom: 1rem;
    line-height: 16.5px;
  }
  &__square {
    height: 1rem;
    width: 1rem;
    background: #f7b200;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &__title {
    padding-top: 5px;
    padding-left: 5px;
    font-size: 14px;
  }
}
.about__section--1 {
  margin-bottom: 2rem;
  p {
    font-size: 11px;
    line-height: 16.5px;
    width: 240px;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
}
// .about__section--2 {
//   @media (min-width: 500px) {
//     width: 75%;
//   }
// }
.credits {
  display: flex;
  @include small {
    @include flex(column, null, center);
  }
  @include medium {
    width: 30rem;
    justify-content: center;
  }
  &__part {
    margin-right: 3rem;
    @include flex(column, null, flex-start);
    @include small {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0.5rem 0;
    }
  }
  &__item {
    @include flex(column, null, flex-start);
    margin-bottom: 1rem;

    p {
      font-size: 13px;
    }
  }
}
.expertise {
  font-size: 11px;
}
.trait {
  height: 8px;
  background: #6ad051;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
