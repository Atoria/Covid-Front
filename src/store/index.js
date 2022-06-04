import Vue from 'vue';
import Vuex from 'vuex';
import cards from "./cards";
import statistics from "./statistics";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cards, statistics
  },
})
