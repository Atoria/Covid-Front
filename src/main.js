import Vue from "vue";
import App from "./App";
import router from "./router/index";
import {BootstrapVue} from 'bootstrap-vue'
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";
import Vuelidate from 'vuelidate'
import i18n from "./i18n";
import store from "./store/index";
import Toasted from 'vue-toasted';
import VueResource from 'vue-resource'
import "./filters"


Vue.use(VueResource)
Vue.use(PaperDashboard);
Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(Toasted, {
  position: 'bottom-right',
  duration: 5000
})


Vue.http.interceptors.push((request, next) => {
  if (sessionStorage.getItem('token')) {
    request.headers.set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
  }
  request.headers.set('Accept', 'application/json')

  next(function (response) {
    if (response.status === 401) {
      router.push({name: 'login'})
      Vue.toasted.error('Unauthorized')
    } else if (response.status === 403) {
      router.push({name: 'login'})
      Vue.toasted.error('Forbidden')
    }
  });
})


/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
