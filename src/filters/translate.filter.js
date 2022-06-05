import Vue from 'vue';
import i18n from "../i18n";

Vue.filter('translate', value => {
  return value[i18n.locale] ?value[i18n.locale] : '';
})
