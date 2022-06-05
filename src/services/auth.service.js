import Vue from 'vue'
import {AppSettings} from "../appSettings";



export class AuthService{

  static login(params) {
    return Vue.http.post(AppSettings.getUrl() + '/api/login', params);
  }

  static register(params) {
    return Vue.http.post(AppSettings.getUrl() + '/api/register', params);
  }


}
