//Required module
import Vue from "vue";
import Router from "vue-router";

//Views
import HomePage from "../views/HomePage.vue";
import PartPage from "../views/PartPage.vue";

//Configure Vue-Router
Vue.use(Router);

export default new Router({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/part/:part",
      name: "part",
      component: PartPage,
      props: true
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
