<template>
  <div class="about">
    <div class="about__section about__section--1">
      <div class="about__titleWrapper">
        <h3 class="about__title">À propos du projet</h3>
        <div class="about__square"></div>
      </div>
      <p>
        Bienvenue sur notre projet de fin d'année ! <br />
        Notre mission à été de réaliser un web documentaire sur le thème de
        notre choix. Pour cloturer notre première année. Nous avons donc choisi
        la street food, car nous sommes tous des grands gourmands ! Bon appétit
        à vous !
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
  background: #fff;
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
    font-weight: bold;
    @include medium {
      font-size: 22px;
    }
  }
}
.about__section--1 {
  margin-bottom: 2rem;
  p {
    font-size: 11px;
    line-height: 16.5px;
    width: 20rem;

    @include medium {
      font-size: $regular-desktopText;
    }
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
    @include flex(row, center, center);
    flex-wrap: wrap;
    width: 1 50rem;
  }
  &__part {
    margin-right: 3rem;
    @include small {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0.5rem 0;
    }
    @include medium {
      font-size: $regular-desktopText;
      @include flex(null, null, center);
    }
  }
  &__item {
    @include flex(column, null, flex-start);
    margin-bottom: 1rem;
    font-weight: 500;
    p {
      font-size: 13px;
      @include medium {
        font-size: $regular-desktopText;
      }
    }
  }
}
.expertise {
  font-size: 11px;
  font-weight: 300;
  margin-top: 0.2rem;
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
