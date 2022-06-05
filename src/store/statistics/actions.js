import {StatsService} from "../../services/stats.service";

const STATISTICS_GET_DATA = async ({commit, state}, payload) => {
  let params = {
    limit: state.pagination.perPage,
    offset: (state.pagination.currentPage - 1) * state.pagination.perPage,
    search: state.search,
    column: state.column,
    order: state.order
  }
  const summary = await StatsService.getStats(params)

  let pagination = state.pagination;
  pagination = {
    ...pagination,
    total: summary.body.data.total,
  }

  commit('STATISTICS_SET', ['data', summary.body.data.data])
  commit('STATISTICS_SET', ['pagination', pagination])
}



export default {
  STATISTICS_GET_DATA,

}
