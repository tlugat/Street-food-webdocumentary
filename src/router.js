import Vue from "vue";
import VueRouter from "vue-router";
import Chefs from "./components/Chefs";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/chefs",
      component: Chefs,
    },
  ],
});
