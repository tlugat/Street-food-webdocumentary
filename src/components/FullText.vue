<template>
  <div>
    <div class="text-part">
      <div class="text-part__textContainer">
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
        <p>
          {{ text.content1 }}
        </p>
        <p>{{ text.content2 }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: Object,
  },
};
</script>

<style lang="scss">
.text-part {
  height: 100vh;
  display: flex;
  align-items: center;
  &__textContainer {
    position: relative;
    line-height: 150%;
    padding: 1rem;
    p {
      margin-bottom: 2rem;
    }
  }
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
</style>
