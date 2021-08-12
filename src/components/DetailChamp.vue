<template>
<v-app id="DetailChamp">
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
              <v-timeline-item color="light-blue darken-1" icon="mdi-star" fill-dot>
                <v-card color="light-blue darken-1" dark>
                  <v-card-title class="text-h6">
                    <img :src="`static/champion/${lolData.img}`">&nbsp;&nbsp; <strong>{{lolData.name}}</strong>
                  </v-card-title>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="red lighten-2" icon="mdi-buffer" fill-dot>
                <v-card color="red lighten-2" dark>
                  <v-card-title class="text-h6">
                    <img :src="`static/passive/${lolData.passive_img}`">&nbsp;&nbsp; 패시브 : {{lolData.passive}}
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{lolData.passive_text}}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="purple darken-1" icon="mdi-buffer" fill-dot>
                <v-card color="purple darken-1" dark>
                  <v-card-title class="text-h6">
                    <img :src="`static/spell/${lolData.q_img}`">&nbsp;&nbsp; Q : {{lolData.q}}
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{lolData.q_text}}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="green lighten-1" icon="mdi-buffer" fill-dot>
                <v-card color="green lighten-1" dark>
                  <v-card-title class="text-h6">
                    <img :src="`static/spell/${lolData.w_img}`">&nbsp;&nbsp; W : {{lolData.w}}
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{lolData.w_text}}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="indigo" icon="mdi-buffer" fill-dot>
                <v-card color="indigo" dark>
                  <v-card-title class="text-h6">
                    <img :src="`static/spell/${lolData.e_img}`">&nbsp;&nbsp; E : {{lolData.e}}
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{lolData.e_text}}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="orange darken-3" icon="mdi-star" fill-dot>
                <v-card color="orange darken-3" dark>
                  <v-card-title class="text-h6">
                    <img :src="`static/spell/${lolData.r_img}`">&nbsp;&nbsp; R : {{lolData.r}}
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <p>{{lolData.r_text}}</p>
                  </v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import myAPI from '../API/myAPI'
export default {
  name: 'DetailChamp',
  data () {
    return {
      lolData: []
    }
  },
  computed: {
    getName () {
      return this.$route.params.name
    },
    getImage () {
      return this.$route.params.img
    }
  },
  mounted () {
    myAPI.getOneChampion(this.getName).then(response => {
      this.lolData = response.data
      console.log(this.lolData)
    })
  }
}
</script>

<style scoped>

</style>
