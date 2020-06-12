<template>
  <div class="chapitre">
    <intro class="intro"></intro>
    <half-text class="halfText"></half-text>
    <recettes class="recettes"></recettes>
    <half-text class="halfText"></half-text>
    <video class="video"></video>
    <chefs class="chefs"></chefs>
    <full-text class="fullText"></full-text>
  </div>
</template>

<script>
import FullText from "../components/FullText";
import HalfText from "../components/HalfText";
import Recettes from "../components/Recettes";
import Chefs from "../components/Chefs";
import Intro from "../components/Intro";
import Video from "../components/Video";

export default {
  components: {
    FullText,
    HalfText,
    Recettes,
    Chefs,
    Intro,
    Video,
  },
};
</script>

<style lang="sass" scoped></style>
