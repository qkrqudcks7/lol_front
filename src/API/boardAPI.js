import axios from 'axios'
import authHeader from './auth_header'

// const URL = 'http://localhost:8080/api/board'
const URL = 'http://3.38.10.189:8080/api/board'

export default {
  getAllBoard () {
    return axios.get(URL + '/allboard')
  },
  submitBoard (formdata) {
    return axios.post(URL + '/addboard', formdata, {headers: authHeader()}, {
      'Content-Type': 'multipart/form-data'
    })
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
