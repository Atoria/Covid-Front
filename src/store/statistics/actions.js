const STATISTICS_GET_DATA = async ({commit, state}, payload) => {
  let params = {
    limit: state.perPage,
    offset: payload ? (payload - 1) * state.perPage : 0
  }
  //TODO CALL SERVICE

  commit('STATISTICS_SET', ['data', listResponse.body.data])
  commit('STATISTICS_SET', ['total', listResponse.body.total])
  commit('STATISTICS_SET', ['currentPage', payload ? payload : 1])
}



export default {
  STATISTICS_GET_DATA,

}
