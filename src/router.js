import Vue from "vue";
import VueRouter from "vue-router";
import Chefs from "./components/Chefs";
import IntroChapitre from "./components/IntroChapitre.vue";
import FullText from "./components/FullText";
import HalfText from "./components/HalfText";
import Chapitre1 from "./Views/Chapitre1";
import Chapitre2 from "./Views/Chapitre2";
import JayFai from "./components/Jay-Fai";
import Stats from "./components/Stats";
import LandingPage from "./Views/LandingPage";
Vue.use(VueRouter);

export default new VueRouter({
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
      path: "/origines",
      name: "origines",
      component: HalfText,
      props: true,
    },
    {
      path: "/today",
      name: "today",
      component: HalfText,
      props: true,
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
