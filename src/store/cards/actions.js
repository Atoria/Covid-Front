const CARD_GET_DATA = async ({commit, state}, payload) => {
  let params = {
    limit: state.perPage,
    offset: payload ? (payload - 1) * state.perPage : 0
  }
  //TODO CALL SERVICE

  commit('CARD_SET', ['data', listResponse.body.data])
  commit('CARD_SET', ['total', listResponse.body.total])
  commit('CARD_SET', ['currentPage', payload ? payload : 1])
}



export default {
  CARD_GET_DATA,

}
