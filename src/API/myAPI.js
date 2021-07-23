import axios from 'axios'

const URL = 'http://localhost:8080'

export default {
  getAllChampion () {
    return axios.get(URL + '/allchampion')
  }
}
