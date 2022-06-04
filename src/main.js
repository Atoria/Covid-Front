import Vue from "vue";
import App from "./App";
import router from "./router/index";
import {BootstrapVue} from 'bootstrap-vue'
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import Vuelidate from 'vuelidate'

Vue.use(PaperDashboard);
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
