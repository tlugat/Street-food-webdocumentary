import Vue from "vue";
import VueRouter from "vue-router";
import JayFai from "./Views/JayFai";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/jayfai",
      component: JayFai,
    },
  ],
});
