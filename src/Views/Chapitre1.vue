<template>
  <div class="chapitre">
    <intro class="intro1"></intro>
    <half-text class="halfText"></half-text>
    <full-text class="FullText"></full-text>
    <half-text class="halfText"></half-text>
    <full-text :text="text" class="fullText"></full-text>
    <stats class="stats"></stats>
    <half-text class="halfText"></half-text>
    <jay-fai class="jay-fai"></jay-fai>
  </div>
</template>

<script>
import FullText from "../components/FullText";
import HalfText from "../components/HalfText";
import Stats from "../components/Stats";
import JayFai from "../components/Jay-Fai";
import Intro from "../components/IntroChapitre";

export default {
  components: {
    FullText,
    HalfText,
    Stats,
    JayFai,
    Intro,
  },
  data() {
    return {};

  },
};
</script>

<style lang="scss" scoped></style>
