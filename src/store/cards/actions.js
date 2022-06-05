import {StatsService} from "../../services/stats.service";

const CARD_GET_DATA = async ({commit, state}, payload) => {
  const summary = await StatsService.getSummary()
  commit('CARD_SET', ['data', summary.body.data])
}


export default {
  CARD_GET_DATA,
}
