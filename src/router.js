import Vue from "vue";
import VueRouter from "vue-router";
import Chefs from "./components/Chefs";
import IntroChapitre from "./components/IntroChapitre.vue";
import Recettes from "./components/Recettes.vue";
import FullText from "./components/FullText";
import HalfText from "./components/HalfText";
import JayFai from "./components/Jay-Fai";
import Stats from "./components/Stats";
import LandingPage from "./Views/LandingPage";
import Video from "./components/Video";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: LandingPage,
    },
    {
      path: "/chefs/:title",
      name: "chefs",
      component: Chefs,
    },
    {
      path: "/intro-chapitre/:id",
      component: IntroChapitre,
    },
    {
      path: "/recettes",
      name: "recettes",
      component: Recettes,
    },
    {
      path: "/text/:id",
      component: HalfText,
      props: true,
    },
    {
      path: "/full-text/:id",
      component: FullText,
      props: true,
    },

    {
      path: "/stats",
      component: Stats,
    },
    {
      path: "/jay-fai",
      name: "jay-fai",
      component: JayFai,
      props: true,
    },
    {
      path: "/chefs-video",
      component: Video,
    },
  ],
});
