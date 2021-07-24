<template>
  <v-app id="Champ">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>챔피언</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

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
              <v-sheet height="200" width="200"><img :src="'static/champion/' + j.img" height="200" width="200" @click="getOneChamp(j.name)">
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
    getOneChamp (champName) {
      this.$router.push({name: 'detailChamp', params: {name: champName}})
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
