import Vue from "vue";
import VueRouter from "vue-router";
import Chefs from "./components/Chefs";
import IntroChapitre from "./components/IntroChapitre.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/chefs",
      component: Chefs,
    },
    {
      path: "/intro-chapitre",
      component: IntroChapitre,
    },
  ],
});
