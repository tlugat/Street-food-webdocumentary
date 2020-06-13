<template>
  <div class="cardChef">
    <div class="chef">
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
        <line x1="2.18557e-07" y1="86.5" x2="90.4599" y2="86.5" stroke="#F7B200" stroke-width="5" />
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
        <line x1="2.18557e-07" y1="86.5" x2="90.4599" y2="86.5" stroke="#F7B200" stroke-width="5" />
      </svg>
      <div class="chef__face">
        <h2>{{ title }}</h2>
        <img :src="url" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chef",
  props: {
    title: String,
    url: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/global.scss";
.cardChef {
  @include flex(null, center, center);

  .chef {
    width: 245px;
    height: 355px;
    position: relative;
    @include flex(null, center, center);
    /*@include medium {
      width: 165px;
      height: 245px;
    }*/
    @include xlarge {
      width: 270px;
      height: 400px;
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

      h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-bottom: solid 2px $yellow;
        padding-bottom: 0.2rem;
      }

      img {
        width: 100%;
        height: 100%;
      }

      /*@include medium {
        width: 150px;
        height: 230px;
      }*/

      @include xlarge {
        width: 250px;
        height: 380px;
      }
    }
  }
}
</style>
