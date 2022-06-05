<template>
  <div>
    <b-card>
      {{ searchInput }}
      <b-input-group>
        <b-form-input v-model="searchInput" type="text"></b-form-input>

        <b-input-group-append>
          <b-button variant="outline-info" @click="searchData()">{{ $t("search") }}</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-card>

    <b-card>

      <b-table
        :items="items"
        :fields="fields"
        :no-local-sorting="true"
        stacked="md"
        @sort-changed="sortingChanged"
        striped hover
        show-empty
        small
      >
      </b-table>


      <b-pagination
        v-model="pagination.currentPage"
        :total-rows="pagination.total"
        :per-page="pagination.perPage"
        @input="paginate($event)"
        aria-controls="my-table"
        align="center"
      ></b-pagination>


    </b-card>
  </div>

</template>

<script>

import {createNamespacedHelpers} from "vuex";

const {
  mapState,
  mapMutations,
  mapActions
} = createNamespacedHelpers('statistics')


export default {
  data() {
    return {
      searchInput: "",
      fields: [
        {key: 'code', label: this.$t('code'), sortable: true},
        {key: 'name', label: this.$t('name'), sortable: true},
        {key: 'confirmed', label: this.$t('confirmed'), sortable: true},
        {key: 'recovered', label: this.$t('recovered'), sortable: true},
        {key: 'deaths', label: this.$t('death'), sortable: true},
        {key: 'critical', label: this.$t('critical'), sortable: true},
      ]
    }
  },
  computed: {
    ...mapState({
      items: state => state.data,
      pagination: state => state.pagination,
    })
  },
  methods: {
    ...mapActions({
      getData: "STATISTICS_GET_DATA"
    }),
    ...mapMutations({
      setValue: "STATISTICS_SET",
      paginatePage: "STATISTICS_PAGINATE",
      sortChange: "STATISTICS_SORT_CHANGE",
      setSearch: "STATISTICS_SEARCH"
    }),
    sortingChanged(ctx) {
      this.sortChange(ctx);
      this.getData();
    },
    paginate(ctx) {
      this.getData();
    },
    searchData() {
      this.setSearch(this.searchInput);
      this.getData();
    }
  },
  beforeMount() {
    this.getData();
  }

};
</script>
<style lang="scss">


</style>
