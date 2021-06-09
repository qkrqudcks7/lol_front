<template>
<div>
  <div>
    <input type="text" v-model="name">
  </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  name: "Home",
  data () {
    return {
      name:"휴가개짧아"

    }
  },
  created () {
    axios.get(`/lol/summoner/v4/summoners/by-name/${this.name}?api_key=RGAPI-aae88b92-c61f-43ba-ba52-9a93380afe89`)
    .then(response => {
      console.log(response.data)
      console.log(response.data.accountId)
    })
  }
}
</script>

<style scoped>

</style>