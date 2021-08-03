<template>
  <v-app id="Champ">
    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
              v-for="j in allChamp"
              :key="`${n}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="200" width="200"><img :src="'static/champion/' + j.img" height="200" width="200" @click="getOneChamp(j.name,j.img)">
                <div>{{j.name}}</div>
              </v-sheet>
              <br>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import myAPI from '../API/myAPI'
export default {
  name: 'Champ',
  data () {
    return {
      allChamp: []
    }
  },
  methods: {
    getOneChamp (champName, champImg) {
      this.$router.push({name: 'detailChamp', params: {name: champName, img: champImg}})
    }
  },
  mounted () {
    myAPI.getAllChampion().then(response => {
      this.allChamp = response.data
    })
  }
}
</script>

<style scoped>

</style>
