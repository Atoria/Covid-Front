<template>
  <div>

    <div class="row">
      <div class="col-md-6 col-xl-3">
        <stats-card>
          <div class=" text-center" slot="header">
            <p>{{ $t("confirmed") }}</p>
          </div>
          <div class="numbers" slot="content">
            <p>{{ cardList.confirmed }}</p>
          </div>
        </stats-card>
      </div>
      <div class="col-md-6 col-xl-3">

        <stats-card>
          <div class=" text-center" slot="header">
            <p>{{ $t("critical") }}</p>
          </div>
          <div class="numbers" slot="content">
            <p>{{ cardList.critical }}</p>
          </div>
        </stats-card>
      </div>
      <div class="col-md-6 col-xl-3">

        <stats-card>
          <div class=" text-center" slot="header">
            <p>{{ $t("death") }}</p>
          </div>
          <div class="numbers" slot="content">
            <p>{{ cardList.deaths }}</p>
          </div>
        </stats-card>
      </div>
      <div class="col-md-6 col-xl-3">

        <stats-card>
          <div class=" text-center" slot="header">
            <p>{{ $t("recovered") }}</p>
          </div>
          <div class="numbers" slot="content">
            <p>{{ cardList.recovered }}</p>
          </div>
        </stats-card>
      </div>
    </div>


  </div>
</template>
<script>
import {StatsCard, ChartCard} from "@/components/index";
import Chartist from 'chartist';
import {createNamespacedHelpers} from "vuex";
import {state} from "../store/cards/state";

const {
  mapState,
  mapActions
} = createNamespacedHelpers('cards')

export default {
  components: {
    StatsCard,
    ChartCard
  },
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          country: "USA",
          title: "Capacity",
          value: "105GB",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          country: "USA",
          title: "Revenue",
          value: "$1,345",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          country: "USA",
          title: "Errors",
          value: "23",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          country: "USA",
          title: "Followers",
          value: "+45",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ],
    };
  },
  computed: {
    ...mapState({
      cardList: state => state.data
    })
  },

  methods: {
    ...mapActions({
      getCards: "CARD_GET_DATA"
    }),

  },
  beforeMount() {
    this.getCards();
  }

};
</script>
<style>
</style>
