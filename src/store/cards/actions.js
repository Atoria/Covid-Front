import {StatsService} from "../../services/stats.service";

const CARD_GET_DATA = async ({commit, state}, payload) => {
  let params = {
    limit: state.perPage,
    offset: payload ? (payload - 1) * state.perPage : 0
  }
  //TODO CALL SERVICE

  const summary = await StatsService.getSummary()
  commit('CARD_SET', ['data', summary.body.data])
}



export default {
  CARD_GET_DATA,

}
