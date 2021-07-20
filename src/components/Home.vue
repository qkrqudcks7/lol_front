<template>
  <div>
    <div>
      <input type="text" v-model="name">
      <button @click="find_id">검색</button>
    </div>
    <div>{{name}}</div>
    <hr>
    <div>
      <div>솔로랭크</div>
      <img :src="'static/emblems/' + solo.tier + '.png'" height="100" width="100">
      <div>{{solo.tier + solo.rank}}</div>
      <div>{{solo.leaguePoints}}LP / {{solo.wins}}승 {{solo.losses}}패</div>
      <div>승률 : {{ (solo.wins / (solo.wins + solo.losses) * 100).toFixed(0) }}%</div>
    </div>

    <div>
      <div>자유 5:5 랭크</div>
      <img :src="'static/emblems/' + free.tier + '.png'" height="100" width="100">
      <div>{{free.tier + free.rank}}</div>
      <div>{{free.leaguePoints}}LP / {{free.wins}}승 {{free.losses}}패</div>
      <div>승률 : {{ (free.wins / (free.wins + free.losses) * 100).toFixed(0) }}%</div>
    </div>
    <hr>
    <div>
      <h3>최근 20게임</h3>
      <div v-for="(j,index) in detail" :key="index">
        <div>{{j[3]}}</div>
        <div>{{j[2]}}</div>
        <img :src="j[0]"><br>
        <img :src="j[5]">
        <img :src="j[7]">
        <img :src="j[15][0]" height="80" width="80">
        <img :src="j[15][1]" height="50" width="50">
        <div>{{j[1]}}</div>
        <div>{{j[8]}} / {{j[9]}} / {{j[10]}}</div>
        <div>평점 : {{ ((j[8] + j[10]) / j[9]).toFixed(2)}}</div>
        <div>레벨 : {{j[11]}}</div>
        <div>cs : {{j[12]}}</div>
        <img :src="j[16]">
        <img :src="j[17]">
        <img :src="j[18]">
        <img :src="j[19]">
        <img :src="j[21]">
        <img :src="j[22]">
        <img :src="j[20]">
        <div>
          {{j[13][0]}}<img :src="j[14][0]" height="50" width="50">
          {{j[13][1]}}<img :src="j[14][1]" height="50" width="50">
          {{j[13][2]}}<img :src="j[14][2]" height="50" width="50">
          {{j[13][3]}}<img :src="j[14][3]" height="50" width="50">
          {{j[13][4]}}<img :src="j[14][4]" height="50" width="50">
        </div>
        <div>
          {{j[13][5]}}<img :src="j[14][5]" height="50" width="50">
          {{j[13][6]}}<img :src="j[14][6]" height="50" width="50">
          {{j[13][7]}}<img :src="j[14][7]" height="50" width="50">
          {{j[13][8]}}<img :src="j[14][8]" height="50" width="50">
          {{j[13][9]}}<img :src="j[14][9]" height="50" width="50">
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import championFile from '../lol_data/champion.json'
import spellFile from '../lol_data/summoner.json'
import itemFile from '../lol_data/item.json'
import runesFile from '../lol_data/runesReforged.json'
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
          return 'static/champion/' + file[x].id + '.png'
        }
      }
    },
    getDurationTime (seconds) {
      let hour = parseInt(seconds / 3600)
      let min = parseInt((seconds % 3600) / 60)
      let sec = seconds % 60
      if (hour !== 0) {
        return hour + '시간' + min + '분' + sec + '초'
      } else {
        return min + '분 ' + sec + '초'
      }
    },
    findRunes (runeNum) {
      let runeFile = runesFile
      for (let x in runeFile) {
        if (runeFile[x].id === runeNum) {
          return 'static/' + runeFile[x].icon
        }
      }
    },
    findMainRunes (runeNum, detailRune) {
      let runeFile = runesFile
      for (let x in runeFile) {
        if (runeFile[x].id === runeNum) {
          for (let y in runeFile[x].slots) {
            for (let z in runeFile[x].slots[y]) {
              for (let a in runeFile[x].slots[y][z]) {
                if (runeFile[x].slots[y][z][a].id === detailRune) {
                  return 'static/' + runeFile[x].slots[y][z][a].icon
                }
              }
            }
          }
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
              array.push(this.$moment(b.timestamp).format('YYYY-MM-DD HH:mm:SS'))
              let data = response.data
              array.push(this.getDurationTime(data.gameDuration))
              // 해당 유저 아이디 값 구하기
              let id = ''
              for (let i = 1; i < data.participantIdentities.length; i++) {
                if (data.participantIdentities[i].player.summonerName === this.name) {
                  id = data.participantIdentities[i].participantId
                  break
                }
              }
              // 아이디 값으로 승,패 구하기
              for (let i = 0; i < 2; i++) {
                if (data.teams[i].teamId === data.participants[id].teamId) {
                  if (data.teams[i].win === 'Win') {
                    array.push('승리')
                  } else {
                    array.push('패배')
                  }
                }
              }
              // 스펠 1 구하기
              let file = spellFile.data
              for (let i in file) {
                if (file[i].key === String(data.participants[id - 1].spell1Id)) {
                  array.push(file[i].name)
                  array.push('static/spell/' + file[i].id + '.png')
                  break
                }
              }
              // 스펠 2 구하기
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
              // 전체 인원 닉네임 구하기
              let nameArray = []
              for (let i in data.participantIdentities) {
                nameArray.push(data.participantIdentities[i].player.summonerName)
              }
              array.push(nameArray)
              // 전체 인원 챔피언 구하기
              let champArray = []
              for (let i in data.participants) {
                champArray.push(this.findCharacterId(data.participants[i].championId))
              }
              array.push(champArray)
              // 룬 구하기
              let runes = []
              runes.push(this.findMainRunes(data.participants[id - 1].stats.perkPrimaryStyle, data.participants[id - 1].stats.perk0))
              runes.push(this.findRunes(data.participants[id - 1].stats.perkSubStyle))
              array.push(runes)
              // 아이템 구하기
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
