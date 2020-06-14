<template>
  <div class="chapitre">
    <intro class="intro1"></intro>
    <half-text class="halfText"></half-text>
    <full-text :text="text" class="FullText"></full-text>
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
    return {
      text: [
        {
          content1: `La cuisine de rue accompagne l’évolution de nos sociétés au fil des siècles et emprunte différentes formes selon le lieu et l’époque. Pour certains pays, elle se fait moins présente tandis que pour d’autres elle constitue un secteur lucratif et une source importante d’emplois.`,
          content2: `Les classes urbaines et défavorisées de l’époque partageaient leur habitation et ne disposaient pas pour la plupart d’une cuisine. Ils devaient manger dans la rue en se rendant dans un thermopolium (un établissement de restauration rapide qui proposait des repas pour toutes les bourses).`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
