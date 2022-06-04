<template>
  <div>

    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class=" text-center"slot="header">
            <h2>{{ stats.country }}</h2>
          </div>
          <div class="numbers" slot="content">
            <p>{{ $t("confirmed") }} - {{stats.value}}</p>
            <p>{{ $t("recovered") }} - {{stats.value}}</p>
            <p>{{ $t("death") }} - {{stats.value}}</p>

          </div>
        </stats-card>
      </div>
    </div>


  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from 'chartist';
export default {
  components: {
    StatsCard,
    ChartCard
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
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
  }
};
</script>
<style>
</style>
