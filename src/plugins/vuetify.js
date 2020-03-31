/**
 * @file Register vue plugins
 * @author Justin Dah-kenangnon <dah.kenangnon@gmail.com>
 * @copyright EnsgmmBj's community
 * @license MIT
 */

import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import fr from "vuetify/es5/locale/fr";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { fr },
    current: "fr"
  },
  icons: {
    iconfont: "mdi"
  },
  theme: {
    themes: {
      light: {
        primary: "#009688",
        secondary: "#3F51B5",
        accent: "#8c9eff",
        error: "#b71c1c"
      }
    }
  }
});
