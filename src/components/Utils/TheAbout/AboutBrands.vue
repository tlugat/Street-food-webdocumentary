<template>
  <div class="about">
    <div class="projet">
      <div class="projet__title">
        <div class="square"></div>
        <h3>À propos du projet</h3>
      </div>
      <p>Thalassius vero ea tempestate praefectus praetorio praesens ipse quoque adrogantis ingenii, considerans incitationem eius ad multorum augeri discrimina, non maturitate vel consiliis mitigabat.</p>
      <a href="https://github.com/tlugat/Street-food-webdocumentary">Github</a>
    </div>
    <div class="credit">
      <div class="credit__title">
        <div class="square"></div>
        <h3>Crédit</h3>
        <div class="lign-1">
          <div class="teo">
            <h5>Téo Lugat</h5>
            <p>Font</p>
          </div>
        </div>
        <div class="lign-2"></div>
      </div>
    </div>
    <div class="trait"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  height: 265px;
  width: 100%;
  background-color: green;
  flex-direction: row;
  display: flex;

  .projet {
    &__title {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-top: 40px;
      margin-left: 50px;
      .square {
        width: 20px;
        height: 20px;
        background-color: #f7b200;
      }

      h3 {
        font-size: 22px;
        margin: 0;
        position: absolute;
        top: 5px;
        left: 5px;
      }
    }
    p {
      margin-left: 55px;
      margin-top: 15px;
      margin-bottom: 12px;
      width: 415px;
      font-size: 14px;
    }
    a {
      margin-left: 55px;
      font-size: 14px;
    }
  }

  .credit {
    &__title {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-top: 40px;
      margin-left: 145px;

      h3 {
        font-size: 22px;
        margin: 0;
        position: absolute;
        top: 5px;
        left: 5px;
      }
      .square {
        width: 20px;
        height: 20px;
        background-color: #f7b200;
      }
    }

    .lign-1 {
      h5 {
        font-size: 16px;
        margin-bottom: 5px;
        margin-top: 15px;
      }
      p {
        font-size: 14px;
        margin: 0;
      }
      .teo {
      }
    }
  }

  .trait {
    width: 100%;
    height: 8px;
    background-color: #6ad051;
    position: absolute;
    bottom: 0;
  }
}
</style>
