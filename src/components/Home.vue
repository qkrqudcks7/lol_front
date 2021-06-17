<template>
<div>
  <div>
    <input type="text" v-model="name">
    <button @click="find_id">검색</button>
  </div>
  <div>
    <h3>솔로랭크</h3>
    <div>{{solo.tier + solo.rank}}</div>
    <div>{{solo.wins}}승</div>
    <div>{{solo.losses}}패</div>
  </div>

  <div>
    <h3>자유랭크</h3>
    <div>{{free.tier + free.rank}}</div>
    <div>{{free.wins}}승</div>
    <div>{{free.losses}}패</div>
  </div>
</div>

</template>

<script>
import lolAPI from "../lolAPI"

export default {
  name: "Home",
  data () {
    return {
      name: "",
      data: "",
      solo: [],
      free: []

    }
  },
  methods: {
    find_id() {
      lolAPI.find_id(this.name).then(response => {
        console.log(response.data)
        this.data = response.data.id
        lolAPI.find_league(this.data).then(response => {
          console.log(response.data.length)
          if (response.data[0].queueType ==="RANKED_FLEX_SR"){
            this.free=response.data[0]
            if (response.data.length ===1 ) {
              this.solo = ""
            }
          }
          if (response.data[0].queueType==="RANKED_SOLO_5x5") {
            this.solo = response.data[0]
            if (response.data.length ===1 ) {
              this.free = ""
            }
          }
          if (response.data[1].queueType==="RANKED_FLEX_SR") {
            this.free = response.data[1]
          }
          if (response.data[1].queueType==="RANKED_SOLO_5x5") {
            this.solo = response.data[1]
          }
        })

      }).catch(error => {
        if (error.response) {
          this.data = "찾을 수 없는 사용자입니다."
        }
      })
}

  }
}
</script>

<style scoped>

</style>