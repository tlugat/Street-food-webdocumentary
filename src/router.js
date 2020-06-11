import Vue from "vue";
import VueRouter from "vue-router";
import JayFaiPage from "./Views/JayFaiPage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/jayfai",
      component: JayFaiPage,
    },
  ],
});
