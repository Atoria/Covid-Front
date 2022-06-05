import Vue from 'vue'
import {AppSettings} from "../appSettings";



export class StatsService{

  static getStats(params) {
    return Vue.http.get(AppSettings.getUrl() + '/api/stats', params);
  }

  static getSummary() {
    return Vue.http.get(AppSettings.getUrl() + '/api/summary');
  }


}
