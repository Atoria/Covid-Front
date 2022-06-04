<template>
  <div>
    <b-card>
      <b-input-group>
        <b-form-input type="text"></b-form-input>

        <b-input-group-append>
          <b-button variant="outline-info">Search</b-button>

        </b-input-group-append>
      </b-input-group>
    </b-card>

    <b-card>

      <b-table
        :items="items"
        :fields="fields"
        stacked="md"
        @sort-changed="sortingChanged"
        striped hover
        show-empty
        small
      >
      </b-table>


      <b-pagination
        v-model="report.currentPage"
        :total-rows="report.total"
        :per-page="report.perPage"
        @input="paginate($event)"
        aria-controls="my-table"
        align="center"
      ></b-pagination>


    </b-card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      report: {
        currentPage: 1,
        total: 0,
        perPage: 10,
      },
      items: [],
      fields: [
        {key: 'code', label: 'Code', sortable: true},
        {key: 'name', label: 'Name', sortable: true},
        {key: 'confirmed', label: 'Confirmed', sortable: true},
        {key: 'recovered', label: 'Recovered', sortable: true},
        {key: 'death', label: 'Death', sortable: true},
      ]
    }
  },
  methods: {
    sortingChanged(ctx) {
      console.log(ctx);
    },
    paginate(ctx) {
      console.log(ctx);
    }
  }

};
</script>
<style lang="scss">


</style>
