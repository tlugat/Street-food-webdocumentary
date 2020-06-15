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
// import LandingPage from "./Views/LandingPage";
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/chefs",
      component: Chefs,
    },
    {
      path: "/intro-chapitre",
      component: IntroChapitre,
    },
    {
      path:"/recettes",
      component: Recettes,
    },
    {
      path: "/full-text",
      component: FullText,
    },
    {
      path: "/half-text",
      component: HalfText,
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
