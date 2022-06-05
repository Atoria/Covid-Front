const STATISTICS_SET = (state, [variable, value]) => {
  state[variable] = value
}
const STATISTICS_PAGINATE = (state, payload) => {
  state.pagination.currentPage = payload;
}
const STATISTICS_SEARCH = (state, payload) => {
  state.search = payload;
}
const STATISTICS_SORT_CHANGE = (state, payload) => {
  state.column = payload.sortBy;
  state.order = payload.sortDesc ? 'desc' : 'asc';
}


export default {
  STATISTICS_SET,
  STATISTICS_PAGINATE,
  STATISTICS_SORT_CHANGE,
  STATISTICS_SEARCH
}
