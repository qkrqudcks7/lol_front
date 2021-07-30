import axios from 'axios'
import authHeader from './auth_header'

const URL = 'http://localhost:8080/api/board'

export default {
  getAllBoard () {
    return axios.get(URL + '/allboard')
  },
  submitBoard (boardRequest) {
    return axios.post(URL + '/addboard', boardRequest, {headers: authHeader()})
  },
  getOneBoard (id) {
    return axios.get(URL + `/oneboard/${id}`)
  },
  getComment (id) {
    return axios.get(URL + `/comments/${id}`)
  },
  deleteBoard (id) {
    return axios.delete(URL + `/oneboard/${id}`)
  },
  submitComment (id, commentForm) {
    return axios.post(URL + `/comments/${id}`, commentForm)
  }
}
