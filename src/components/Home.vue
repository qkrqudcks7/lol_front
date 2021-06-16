<template>
<div>
  <div>
    <input type="text" v-model="name">
    <button @click="find_id">dd</button>
    <h3>{{data}}</h3>
  </div>
</div>

</template>

<script>
import lolAPI from "../lolAPI"

export default {
  name: "Home",
  data () {
    return {
      name:"",
      data:""

    }
  },
  methods: {
    find_id() {
      lolAPI.find_id(this.name).then(response => {
        console.log(response.data)
        this.data = response.data.accountId
      })
}

  }
}
</script>

<style scoped>

</style>