<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard/statistics" name="Statistics" icon="ti-panel"/>
        <sidebar-link to="/dashboard/cards" name="Cards" icon="ti-view-list-alt"/>
      </template>
      <mobile-menu>
        <drop-down class="nav-item"
                   title="Lang"
                   title-classes="nav-link"
                   icon="ti-book">
          <a class="dropdown-item">EN</a>
          <a class="dropdown-item">GE</a>
        </drop-down>
        <li class="nav-item">
          <a class="nav-link">
            <i class="ti-angle-right"></i>
            <p>Logout</p>
          </a>
        </li>
        <li class="divider"></li>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
