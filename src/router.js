import Vue from "vue";
import VueRouter from "vue-router";
import Chefs from "./components/Chefs";
import IntroChapitre from "./components/IntroChapitre.vue";
import Recettes from "./components/Recettes.vue";
import FullText from "./components/FullText";
import HalfText from "./components/HalfText";
import Chapitre1 from "./Views/Chapitre1";
import Chapitre2 from "./Views/Chapitre2";
import JayFai from "./components/Jay-Fai";
import Stats from "./components/Stats";
import LandingPage from "./Views/LandingPage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: LandingPage,
    },
    {
      path: "/chefs",
      name: "chefs",
      component: Chefs,
    },
    {
      path: "/intro-chapitre",
      component: IntroChapitre,
    },
    {
      path: "/recettes",
      name: "recettes",
      component: Recettes,
    },
    {
      path: "/origines",
      name: "origines",
      component: HalfText,
      props: true,
    },
    {
      path: "/origines/2",
      component: FullText,
      props: true,
      params: {
        text1: `La cuisine de rue accompagne l’évolution de nos sociétés au fil des siècles et emprunte différentes formes selon le lieu et l’époque. Pour certains pays, elle se fait moins présente tandis que pour d’autres elle constitue un secteur lucratif et une source importante d’emplois.`,
        text2: `Les classes urbaines et défavorisées de l’époque partageaient leur habitation et ne disposaient pas pour la plupart d’une cuisine. Ils devaient manger dans la rue en se rendant dans un thermopolium (un établissement de restauration rapide qui proposait des repas pour toutes les bourses).`,
        background: `https://cdn.discordapp.com/attachments/697362929946722358/722084316250636288/img-apogee-desktop.png`,
      },
    },

    {
      path: "/today",
      name: "today",
      component: HalfText,
      props: true,
    },
    {
      path: "/today/2",
      name: "today2",
      component: FullText,
      props: true,
      params: {
        text1: `Les plats sont diverses et tirent leur origine de la culture locale, internationale, un mélange des deux ou bien de la créativité de celui ou celle qui les réalise.
        `,
        text2: `Autour de ces restaurants en plein air, souvent peu voire pas de places pour les clients mais pourtant ils sont légion à tenter l’expérience culinaire.`,
        background: `https://cdn.discordapp.com/attachments/697362929946722358/722152896258375740/background-today2_1.png`,
      },
    },
    {
      path: "/recette",
      name: "recette",
      component: HalfText,
      props: true,
    },
    {
      path: "/chic",
      name: "chic",
      component: HalfText,
      props: true,
    },
    {
      path: "/conclusion",
      name: "conclusion",
      component: FullText,
      props: true,
    },
    {
      path: "/fine-casual",
      name: "fine-casual",
      component: HalfText,
      props: true,
    },
    {
      path: "/chapitre1",
      component: Chapitre1,
    },
    {
      path: "/stats",
      component: Stats,
    },
    {
      path: "/jay-fai",
      component: JayFai,
    },
    {
      path: "/chapitre2",
      component: Chapitre2,
    },
  ],
});
