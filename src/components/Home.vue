<template>
  <div>
  <div>
    <input type="text" v-model="name">
    <button @click="find_id">검색</button>
  </div>
  <div>{{name}}</div>
    <div>{{message}}</div>
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

  <div>
    <h3>최근 10게임</h3>
    <div v-for="(j,index) in detail" :key="'a'+index">
      <div>{{j[0]}}</div>
      <div>{{j[1]}}</div>
      <img :src="j[3]">
      <img :src="j[5]">
      <div>{{j[6]}} / {{j[7]}} / {{j[8]}}</div>
      <div>평점 : {{ ((j[6] + j[8]) / j[7]).toFixed(2)}}</div>
      <div>레벨 : {{j[9]}}</div>
      <div>cs : {{j[10]}}</div>
      <img :src="j[11]">
      <img :src="j[12]">
      <img :src="j[13]">
      <img :src="j[14]">
      <img :src="j[16]">
      <img :src="j[17]">
      <img :src="j[15]">
      <div>--------------------------------------------------------------------</div>
    </div>
  </div>
  </div>
</template>

<script>
import championFile from '../lol_data/champion.json'
import spellFile from '../lol_data/summoner.json'
import itemFile from '../lol_data/item.json'
import lolAPI from '../API/lolAPI'
export default {
  name: 'Home',
  data () {
    return {
      name: '',
      message: '',
      data: '',
      solo: [],
      free: [],
      match: [],
      detail: []
    }
  },
  computed: {
  },
  methods: {
    findCharacterId (champion) {
      let file = championFile.data
      for (let x in file) {
        if (file[x].key === String(champion)) {
          return file[x].name
        }
      }
    },
    async find_id () {
      lolAPI.find_id(this.name).then(response => {
        this.data = response.data.id
        let accountId = response.data.accountId

        lolAPI.find_match(accountId).then(async response => {
          this.match = response.data.matches
          for (let b of this.match) {
            await lolAPI.find_detail_match(b.gameId).then(response => {
              let array = []
              array.push(this.findCharacterId(b.champion))
              let data = response.data
              let id = ''
              for (let i = 1; i < data.participantIdentities.length; i++) {
                if (data.participantIdentities[i].player.summonerName === this.name) {
                  id = data.participantIdentities[i].participantId
                  break
                }
              }
              for (let i = 0; i < 2; i++) {
                if (data.teams[i].teamId === data.participants[id].teamId) {
                  if (data.teams[i].win === 'Win') {
                    array.push('승리')
                  } else {
                    array.push('패배')
                  }
                }
              }
              let file = spellFile.data
              for (let i in file) {
                if (file[i].key === String(data.participants[id - 1].spell1Id)) {
                  array.push(file[i].name)
                  array.push('static/spell/' + file[i].id + '.png')
                  break
                }
              }
              for (let i in file) {
                if (file[i].key === String(data.participants[id - 1].spell2Id)) {
                  array.push(file[i].name)
                  array.push('static/spell/' + file[i].id + '.png')
                  break
                }
              }
              array.push(data.participants[id - 1].stats.kills)
              array.push(data.participants[id - 1].stats.deaths)
              array.push(data.participants[id - 1].stats.assists)
              array.push(data.participants[id - 1].stats.champLevel)
              array.push(data.participants[id - 1].stats.totalMinionsKilled)
              let Ifile = itemFile.data
              for (let i in Ifile) {
                if (i === String(data.participants[id - 1].stats.item0)) {
                  array.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item1)) {
                  array.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item2)) {
                  array.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item3)) {
                  array.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item4)) {
                  array.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item5)) {
                  array.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item6)) {
                  array.push('static/item/' + Ifile[i].image.full)
                }
              }

              this.detail.push(array)
            })
          }
          console.log(this.detail)
        })

        lolAPI.find_league(this.data).then(response => {
          if (response.data[0].queueType === 'RANKED_FLEX_SR') {
            this.free = response.data[0]
            if (response.data.length === 1) {
              this.solo = ''
            }
          }
          if (response.data[0].queueType === 'RANKED_SOLO_5x5') {
            this.solo = response.data[0]
            if (response.data.length === 1) {
              this.free = ''
            }
          }
          if (response.data[1].queueType === 'RANKED_FLEX_SR') {
            this.free = response.data[1]
          }
          if (response.data[1].queueType === 'RANKED_SOLO_5x5') {
            this.solo = response.data[1]
          }
        })
      }).catch(error => {
        if (error.response) {
          console.log(error.response)
          this.message = '찾을 수 없는 사용자입니다.'
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
