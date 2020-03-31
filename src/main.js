/**
 * @file Renderer process for electron and entrypoint for vue
 * @author Justin Dah-kenangnon <dah.kenangnon@gmail.com>
 * @copyright EnsgmmBj's community
 * @license MIT
 */

import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./routes";
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";

Vue.use(VueSimpleMarkdown);
Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === "development";

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
