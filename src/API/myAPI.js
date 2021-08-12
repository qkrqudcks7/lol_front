import axios from 'axios'

const URL = 'http://localhost:8080/lol'
// const URL = 'http://3.38.10.189:8080/lol'

export default {
  getAllChampion () {
    return axios.get(URL + '/allchampion')
  },
  getOneChampion (name) {
    return axios.get(URL + `/champion/${name}`)
  }
}
