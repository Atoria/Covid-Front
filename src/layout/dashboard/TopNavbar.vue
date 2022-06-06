<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{routeName}}</a>
      <button class="navbar-toggler navbar-burger"
              type="button"
              @click="toggleSidebar"
              :aria-expanded="$sidebar.showSidebar"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">

          <drop-down class="nav-item"
                     title="LANG"
                     title-classes="nav-link"
                     icon="ti-book">
            <template v-for="lang of languages">
              <a class="dropdown-item" @click="setLocale(lang)">{{ lang }}</a>
            </template>
          </drop-down>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="ti-angle-right"></i>
              <p @click="logout()">
                {{$t("logout")}}
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div></nav>
</template>
<script>
import router from "../../router";

export default {
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      languages: ['en', 'ka']
    };
  },
  methods: {
    setLocale(lang){
      this.$i18n.locale = lang;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    logout(){
      if(sessionStorage.getItem('token')){
        sessionStorage.removeItem('token')
      }
      this.$router.push({name: 'login'})
    }
  }
};
</script>
<style>
</style>
