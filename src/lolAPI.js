import axios from "axios"

const API_KEY="RGAPI-90bd10bc-7069-47c1-a26d-4e45f92e0118"

export default {
    find_id(name) {
        return axios.get(`/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`)
    }

}