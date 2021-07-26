<template>
  <div>
    <div>
      <input type="text" v-model="name">
      <button @click="find_id">검색</button>
    </div>
    <div>{{name}}</div>
    <hr>
    <v-container fluid>
      <v-row>
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="blue--text align-end"
            height="350px"
            :src="'static/emblems/' + solo.tier + '.png'"
          >
            <v-card-title>{{solo.tier + solo.rank}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">솔로랭크</v-card-subtitle>

          <v-card-text class="text--primary">
            <strong>{{solo.leaguePoints}}LP / {{solo.wins}}승 {{solo.losses}}패</strong>
            <br>
            <strong>승률 : {{ (solo.wins / (solo.wins + solo.losses) * 100).toFixed(0) }}%</strong>
          </v-card-text>
        </v-card>
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="blue--text align-end"
            height="350px"
            :src="'static/emblems/' + free.tier + '.png'"
          >
            <v-card-title>{{free.tier + free.rank}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">자유 5:5 랭크</v-card-subtitle>

          <v-card-text class="text--primary">
            <strong>{{free.leaguePoints}}LP / {{free.wins}}승 {{free.losses}}패</strong>
            <br>
            <strong>승률 : {{ (free.wins / (free.wins + free.losses) * 100).toFixed(0) }}%</strong>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
    <hr>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>최근 20 게임</v-subheader>

        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(j,index) in detail" :key="index"
            hide-actions
          >
            <v-expansion-panel-header v-if="j[4] === '승리'" color="#BBDEFB">
              <v-col
                class="text-no-wrap"
                cols="5"
                sm="2"
              >
                <strong v-html="j[4]"></strong><br><br>
                <strong v-html="j[3]"></strong><br><br>
                <strong v-html="j[2]"></strong><br><br>
              </v-col>
              <v-row
                align="center"
                class="spacer"
                no-gutters
              >
                <v-col
                  cols="4"
                  sm="2"
                  md="1"
                >
                  <v-avatar
                    size="55px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[1]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[16][0]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[16][1]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[6]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      :src="j[8]"
                    >
                  </v-avatar>
                </v-col>

                <v-col
                  class="hidden-xs-only"
                  sm="5"
                  md="3"
                >
                  <strong>{{j[9]}} / {{j[10]}} / {{j[11]}}</strong><br><br>
                  <strong>평점 : {{ ((j[9] + j[11]) / j[10]).toFixed(2)}}</strong>
                </v-col>

                <v-col
                  class="text-no-wrap"
                  cols="5"
                  sm="3"
                >
                  <strong>레벨 : {{j[12]}}</strong><br><br>
                  <strong>cs : {{j[13]}}</strong>
                </v-col>

                <v-col
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  <div>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[18]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[19]"
                    >
                  </v-avatar>
                  </div>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[20]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[22]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[23]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[21]"
                    >
                  </v-avatar>
                </v-col>
                <v-col
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  <div>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][0]"
                        :src="j[15][0]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][1]"
                        :src="j[15][1]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][2]"
                        :src="j[15][2]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][3]"
                        :src="j[15][3]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][4]"
                        :src="j[15][4]"
                      >
                    </v-avatar>
                  </div>
                  <div>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][5]"
                        :src="j[15][5]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][6]"
                        :src="j[15][6]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][7]"
                        :src="j[15][7]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][8]"
                        :src="j[15][8]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][9]"
                        :src="j[15][9]"
                      >
                    </v-avatar>
                  </div>
                </v-col>
                <v-col
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  <v-btn class="mx-2" fab dark color="indigo">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-header v-else color="#FFCDD2">
              <v-col
                class="text-no-wrap"
                cols="5"
                sm="2"
              >
                <strong v-html="j[4]"></strong><br><br>
                <strong v-html="j[3]"></strong><br><br>
                <strong v-html="j[2]"></strong><br><br>
              </v-col>
              <v-row
                align="center"
                class="spacer"
                no-gutters
              >
                <v-col
                  cols="4"
                  sm="2"
                  md="1"
                >
                  <v-avatar
                    size="55px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[1]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[16][0]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[16][1]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      alt="Avatar"
                      :src="j[6]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="25px"
                  >
                    <img
                      :src="j[8]"
                    >
                  </v-avatar>
                </v-col>

                <v-col
                  class="hidden-xs-only"
                  sm="5"
                  md="3"
                >
                  <strong>{{j[9]}} / {{j[10]}} / {{j[11]}}</strong><br><br>
                  <strong>평점 : {{ ((j[9] + j[11]) / j[10]).toFixed(2)}}</strong>
                </v-col>

                <v-col
                  class="text-no-wrap"
                  cols="5"
                  sm="3"
                >
                  <strong>레벨 : {{j[12]}}</strong><br><br>
                  <strong>cs : {{j[13]}}</strong>
                </v-col>

                <v-col
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  <div>
                    <v-avatar
                      size="36px"
                    >
                      <img
                        :src="j[17]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="36px"
                    >
                      <img
                        :src="j[18]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="36px"
                    >
                      <img
                        :src="j[19]"
                      >
                    </v-avatar>
                  </div>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[20]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[22]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[23]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[21]"
                    >
                  </v-avatar>
                </v-col>
                <v-col
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  <div>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][0]"
                           :src="j[15][0]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][1]"
                           :src="j[15][1]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][2]"
                           :src="j[15][2]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][3]"
                           :src="j[15][3]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][4]"
                           :src="j[15][4]"
                      >
                    </v-avatar>
                  </div>
                  <div>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][5]"
                           :src="j[15][5]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][6]"
                           :src="j[15][6]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][7]"
                           :src="j[15][7]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][8]"
                           :src="j[15][8]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img :title="j[14][9]"
                           :src="j[15][9]"
                      >
                    </v-avatar>
                  </div>
                </v-col>
                <v-col
                  class="grey--text text-truncate hidden-sm-and-down"
                >
                  <v-btn class="mx-2" fab dark color="indigo">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <br>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text >빈칸입니다.</v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
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
    getName () {
      return this.$route.params.name
    }
  },
  methods: {
    // detailGame20 (detail) {
    //   let count=0
    //   for (let i in detail) {
    //     if
    //   }
    // },
    findCharacterName (champion) {
      let file = championFile.data
      for (let x in file) {
        if (file[x].key === String(champion)) {
          return file[x].name
        }
      }
    },
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
    findGameType (gameType) {
      if (gameType === 'CLASSIC') {
        return '솔랭'
      } else if (gameType === 'ARAM') {
        return '무작위 총력전'
      }
    },
    async find_id () {
      this.detail = []
      lolAPI.find_id(this.name).then(response => {
        this.data = response.data.id
        let accountId = response.data.accountId

        lolAPI.find_match(accountId).then(async response => {
          this.match = response.data.matches
          for (let b of this.match) {
            await lolAPI.find_detail_match(b.gameId).then(response => {
              let array = []
              array.push(this.findCharacterName(b.champion))
              array.push(this.findCharacterId(b.champion))
              array.push(this.$moment(b.timestamp).format('MM-DD'))
              let data = response.data
              array.push(this.getDurationTime(data.gameDuration))
              // 해당 유저 아이디 값 구하기
              let id = ''
              for (let i = 0; i < 10; i++) {
                if (data.participantIdentities[i].player.summonerName.replace(/ /g, '') === this.name) {
                  id = data.participantIdentities[i].participantId
                  break
                }
              }
              // 아이디 값으로 승,패 구하기
              for (let i = 0; i < 2; i++) {
                if (data.teams[i].teamId === data.participants[id - 1].teamId) {
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
          if (response.data[0]) {
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
          } else if (response.data[1]) {
            if (response.data[1].queueType === 'RANKED_FLEX_SR') {
              this.free = response.data[1]
            }
            if (response.data[1].queueType === 'RANKED_SOLO_5x5') {
              this.solo = response.data[1]
            }
          }
        })
      }).catch(error => {
        if (error.response) {
          console.log(error.response)
          this.message = '찾을 수 없는 사용자입니다.'
        }
      })
    }
  },
  async mounted () {
    lolAPI.find_id(this.getName).then(response => {
      this.data = response.data.id
      let accountId = response.data.accountId

      lolAPI.find_match(accountId).then(async response => {
        this.match = response.data.matches
        for (let b of this.match) {
          await lolAPI.find_detail_match(b.gameId).then(response => {
            let array = []
            array.push(this.findCharacterName(b.champion))
            array.push(this.findCharacterId(b.champion))
            array.push(this.$moment(b.timestamp).format('MM-DD'))
            let data = response.data
            console.log(data)
            array.push(this.getDurationTime(data.gameDuration))
            // 해당 유저 아이디 값 구하기
            let id = ''
            for (let i = 0; i < 10; i++) {
              if (data.participantIdentities[i].player.summonerName.replace(/ /g, '') === this.getName) {
                id = data.participantIdentities[i].participantId
                break
              }
            }
            // 아이디 값으로 승,패 구하기
            for (let i = 0; i < 2; i++) {
              if (data.teams[i].teamId === data.participants[id - 1].teamId) {
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
            // array.push(this.findGameType(data.gameMode))
            this.detail.push(array)
          })
        }
      })
      lolAPI.find_league(this.data).then(response => {
        if (response.data[0]) {
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
        } if (response.data[1]) {
          if (response.data[1].queueType === 'RANKED_FLEX_SR') {
            this.free = response.data[1]
          }
          if (response.data[1].queueType === 'RANKED_SOLO_5x5') {
            this.solo = response.data[1]
          }
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
</script>

<style scoped>

</style>
