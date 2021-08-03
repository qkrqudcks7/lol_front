import axios from 'axios'

const URL = 'http://3.38.10.189:8080/lol'

export default {
  find_id (name) {
    return axios.get(`${URL}/findid/${name}`)
  },

  find_league (id) {
    return axios.get(`${URL}/findleague/${id}`)
  },
  find_match (accountId) {
    return axios.get(`${URL}/findmatch/${accountId}`)
  },
  find_detail_match (matchId) {
    return axios.get(`${URL}/finddetailmatch/${matchId}`)
  }
}
