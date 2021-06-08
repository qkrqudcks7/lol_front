<template>
<div>안녕하시오</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  data () {
    return {

    }
  },
  created () {
    axios.get("/lol/summoner/v4/summoners/by-name/hide on bush?api_key=RGAPI-704f1a4b-2987-4974-9e2a-07b459a0c3ea")
    .then(response => {
      console.log(response.data)
    })
  }
}
</script>

<style scoped>

</style>