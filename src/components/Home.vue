<template>
  <div>
    <div class="col-md-6 offset-md-3">
      <input type="text" class="form-control" v-model="name" @keyup.enter="find_id">
      <v-btn block color="secondary" dark @click="find_id">PARK.GG</v-btn>
    </div>
    <div>{{clientName}}</div>
    <v-btn color="primary" @click="getNowGame">
      진행 중인 게임 보기
    </v-btn>
      <v-container fluid v-if="inGameState === true">
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(x,index) in inGame1" :key="index+'abc'"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-col
                  class="text-no-wrap"
                  cols="5"
                  sm="2"
                >
                  <strong v-html="x[0]"></strong><br><br>
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
                      size="50px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[3]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[5]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[7]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[8]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        :src="x[9]"
                      >
                    </v-avatar>
                  </v-col>

                  <v-col
                    class="text-no-wrap"
                    cols="5"
                    sm="3"
                  >
                    <strong>{{x[1]}} {{x[2]}}</strong><br><br>
                  </v-col>
                  <v-col
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    <v-avatar
                      size="50px"
                    >
                      <img
                        :src="x[10]"
                      >
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
      <div><br><br></div>
      <v-container fluid>
        <v-row justify="center">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(x,index) in inGame2" :key="index+'bcd'"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-col
                  class="text-no-wrap"
                  cols="5"
                  sm="2"
                >
                  <strong v-html="x[0]"></strong><br><br>
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
                      size="50px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[3]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[5]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[7]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        alt="Avatar"
                        :src="x[8]"
                      >
                    </v-avatar>
                    <v-avatar
                      size="25px"
                    >
                      <img
                        :src="x[9]"
                      >
                    </v-avatar>
                  </v-col>

                  <v-col
                    class="text-no-wrap"
                    cols="5"
                    sm="3"
                  >
                    <strong>{{x[1]}} {{x[2]}}</strong><br><br>
                  </v-col>
                  <v-col
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    <v-avatar
                      size="50px"
                    >
                      <img
                        :src="x[10]"
                      >
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
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
    <div class="text-center" v-if="isLoading">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-container fluid>
      <v-row justify="center">
        <v-subheader>최근 20 게임</v-subheader>
        <v-expansion-panels popout>
          <v-expansion-panel
            v-for="(j,index) in detail" :key="index"
            hide-actions
          >
            <v-expansion-panel-header :color="j[4] === '승리' ? '#BBDEFB' : '#FFCDD2'">
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
                      :src="j[17][0]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17][1]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17][2]"
                    >
                  </v-avatar>
                  </div>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17][3]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17][5]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17][6]"
                    >
                  </v-avatar>
                  <v-avatar
                    size="36px"
                  >
                    <img
                      :src="j[17][4]"
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
                  <v-btn class="mx-2" fab dark color="primary" @click="detailPage">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-header>
            <br>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-container fluid>
                <v-row justify="center">
                  <v-expansion-panels popout>
                    <v-expansion-panel
                      v-for="(x,index) in j[18]" :key="index+'a'"
                      hide-actions
                    >
                      <v-expansion-panel-header :color="x[3] === '승리' ? '#E3F2FD' : '#FFEBEE'">
                        <v-col
                          class="text-no-wrap"
                          cols="5"
                          sm="2"
                        >
                          <strong v-html="x[2]"></strong><br><br>
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
                              size="50px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[1]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[5]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[7]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[17]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                :src="x[18]"
                              >
                            </v-avatar>
                          </v-col>

                          <v-col
                            class="hidden-xs-only"
                            sm="5"
                            md="3"
                          >
                            <strong>{{x[8]}} / {{x[9]}} / {{x[10]}}</strong><br><br>
                            <strong>평점 : {{ ((x[8] + x[10]) / x[9]).toFixed(2)}}</strong>
                          </v-col>

                          <v-col
                            class="text-no-wrap"
                            cols="5"
                            sm="3"
                          >
                            <strong>피해량 : {{x[13]}}</strong><br><br>
                            <strong>cs : {{x[12]}}</strong>
                          </v-col>

                          <v-col
                            class="grey--text text-truncate hidden-sm-and-down"
                          >
                            <div>
                              <v-avatar
                                size="36px"
                              >
                                <img
                                  :src="x[19][0]"
                                >
                              </v-avatar>
                              <v-avatar
                                size="36px"
                              >
                                <img
                                  :src="x[19][1]"
                                >
                              </v-avatar>
                              <v-avatar
                                size="36px"
                              >
                                <img
                                  :src="x[19][2]"
                                >
                              </v-avatar>
                            </div>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][3]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][5]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][6]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][4]"
                              >
                            </v-avatar>
                          </v-col>
                          <v-col
                            class="grey--text text-truncate hidden-sm-and-down"
                          >
                            <strong>제어와드 : {{x[14]}}</strong><br><br>
                            <strong>설치와드 : {{x[15]}}</strong><br><br>
                            <strong>제거와드 : {{x[16]}}</strong>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
              <div><br><br></div>
              <v-container fluid>
                <v-row justify="center">
                  <v-expansion-panels popout>
                    <v-expansion-panel
                      v-for="(x,index) in j[19]" :key="index+'b'"
                      hide-actions
                    >
                      <v-expansion-panel-header :color="x[3] === '승리' ? '#E3F2FD' : '#FFEBEE'">
                        <v-col
                          class="text-no-wrap"
                          cols="5"
                          sm="2"
                        >
                          <strong v-html="x[2]"></strong><br><br>
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
                              size="50px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[1]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[5]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[7]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                alt="Avatar"
                                :src="x[17]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="25px"
                            >
                              <img
                                :src="x[18]"
                              >
                            </v-avatar>
                          </v-col>

                          <v-col
                            class="hidden-xs-only"
                            sm="5"
                            md="3"
                          >
                            <strong>{{x[8]}} / {{x[9]}} / {{x[10]}}</strong><br><br>
                            <strong>평점 : {{ ((x[8] + x[10]) / x[9]).toFixed(2)}}</strong>
                          </v-col>

                          <v-col
                            class="text-no-wrap"
                            cols="5"
                            sm="3"
                          >
                            <strong>피해량 : {{x[13]}}</strong><br><br>
                            <strong>cs : {{x[12]}}</strong>
                          </v-col>

                          <v-col
                            class="grey--text text-truncate hidden-sm-and-down"
                          >
                            <div>
                              <v-avatar
                                size="36px"
                              >
                                <img
                                  :src="x[19][0]"
                                >
                              </v-avatar>
                              <v-avatar
                                size="36px"
                              >
                                <img
                                  :src="x[19][1]"
                                >
                              </v-avatar>
                              <v-avatar
                                size="36px"
                              >
                                <img
                                  :src="x[19][2]"
                                >
                              </v-avatar>
                            </div>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][3]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][5]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][6]"
                              >
                            </v-avatar>
                            <v-avatar
                              size="36px"
                            >
                              <img
                                :src="x[19][4]"
                              >
                            </v-avatar>
                          </v-col>
                          <v-col
                            class="grey--text text-truncate hidden-sm-and-down"
                          >
                            <strong>제어와드 : {{x[14]}}</strong><br><br>
                            <strong>설치와드 : {{x[15]}}</strong><br><br>
                            <strong>제거와드 : {{x[16]}}</strong>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-header>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
    <div class="col-md-6 offset-md-3">
      <v-btn block color="secondary" dark>나머지 전적 보기</v-btn>
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
      isLoading: true,
      clientName: '',
      name: '',
      message: '',
      data: '',
      solo: [],
      free: [],
      match: [],
      detail: [],
      inGame1: [],
      inGame2: [],
      inGameState: false
    }
  },
  computed: {
    getName () {
      return this.$route.params.name.replace(/ /g, '')
    }
  },
  methods: {
    async getNowGame () {
      let temp = []
      await lolAPI.find_now_game(this.data).then(async response => {
        for (let i in response.data.participants) {
          let temp2 = []
          await lolAPI.find_league(response.data.participants[i].summonerId).then(res => {
            temp2.push(res.data[0].summonerName)
            temp2.push(res.data[0].tier)
            temp2.push(res.data[0].rank)
          })
          temp2.push(this.findCharacterId(response.data.participants[i].championId))
          let file = spellFile.data
          for (let j in file) {
            if (file[j].key === String(response.data.participants[i].spell1Id)) {
              temp2.push(file[j].name)
              temp2.push('static/spell/' + file[j].id + '.png')
              break
            }
          }
          // 스펠 2 구하기
          for (let j in file) {
            if (file[j].key === String(response.data.participants[i].spell2Id)) {
              temp2.push(file[j].name)
              temp2.push('static/spell/' + file[j].id + '.png')
              break
            }
          }
          temp2.push(this.findRunes(response.data.participants[i].perks.perkStyle, response.data.participants[i].perks.perkSubStyle))
          temp2.push(this.findRunes(response.data.participants[i].perks.perkSubStyle))
          temp2.push(this.findCharacterId(response.data.bannedChampions[i].championId))
          temp.push(temp2)
        }
        this.inGame1 = temp.slice(0, 5)
        this.inGame2 = temp.slice(5, 10)
        this.inGameState = true
      }, error => {
        console.log(error.response.data)
      })
      console.log(this.inGame1)
      console.log(this.inGame2)
    },
    detailPage () {
      this.$router.push({name: 'detailMatch'})
    },
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
      lolAPI.find_id(this.name.replace(/ /g, '')).then(response => {
        this.clientName = response.data.name
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
                if (data.participantIdentities[i].player.summonerName.replace(/ /g, '') === this.name.replace(/ /g, '')) {
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
              let item = []
              for (let i in Ifile) {
                if (i === String(data.participants[id - 1].stats.item0)) {
                  item.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item1)) {
                  item.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item2)) {
                  item.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item3)) {
                  item.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item4)) {
                  item.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item5)) {
                  item.push('static/item/' + Ifile[i].image.full)
                } else if (i === String(data.participants[id - 1].stats.item6)) {
                  item.push('static/item/' + Ifile[i].image.full)
                }
              }
              array.push(item)
              let detail1 = []
              // 10명 디테일 전적
              for (let i = 0; i < 5; i++) {
                let temp = []
                temp.push(this.findCharacterName(data.participants[i].championId))
                temp.push(this.findCharacterId(data.participants[i].championId))
                temp.push(data.participantIdentities[i].player.summonerName)
                let Did = data.participantIdentities[i].participantId

                // 아이디 값으로 승,패 구하기
                for (let j = 0; j < 2; j++) {
                  if (data.teams[j].teamId === data.participants[Did - 1].teamId) {
                    if (data.teams[j].win === 'Win') {
                      temp.push('승리')
                    } else {
                      temp.push('패배')
                    }
                  }
                }
                // 스펠 1 구하기
                let file = spellFile.data
                for (let x in file) {
                  if (file[x].key === String(data.participants[Did - 1].spell1Id)) {
                    temp.push(file[x].name)
                    temp.push('static/spell/' + file[x].id + '.png')
                    break
                  }
                }
                // 스펠 2 구하기
                for (let x in file) {
                  if (file[x].key === String(data.participants[Did - 1].spell2Id)) {
                    temp.push(file[x].name)
                    temp.push('static/spell/' + file[x].id + '.png')
                    break
                  }
                }
                temp.push(data.participants[Did - 1].stats.kills)
                temp.push(data.participants[Did - 1].stats.deaths)
                temp.push(data.participants[Did - 1].stats.assists)
                temp.push(data.participants[Did - 1].stats.champLevel)
                temp.push(data.participants[Did - 1].stats.totalMinionsKilled)
                temp.push(data.participants[Did - 1].stats.totalDamageDealtToChampions)
                temp.push(data.participants[Did - 1].stats.visionWardsBoughtInGame)
                temp.push(data.participants[Did - 1].stats.wardsKilled)
                temp.push(data.participants[Did - 1].stats.wardsPlaced)

                temp.push(this.findMainRunes(data.participants[Did - 1].stats.perkPrimaryStyle, data.participants[Did - 1].stats.perk0))
                temp.push(this.findRunes(data.participants[Did - 1].stats.perkSubStyle))

                let Ifile = itemFile.data
                let item = []
                for (let x in Ifile) {
                  if (x === String(data.participants[Did - 1].stats.item0)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item1)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item2)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item3)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item4)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item5)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item6)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  }
                }
                temp.push(item)
                detail1.push(temp)
              }
              let detail2 = []
              for (let i = 5; i < 10; i++) {
                let temp = []
                temp.push(this.findCharacterName(data.participants[i].championId))
                temp.push(this.findCharacterId(data.participants[i].championId))
                temp.push(data.participantIdentities[i].player.summonerName)
                let Did = data.participantIdentities[i].participantId

                // 아이디 값으로 승,패 구하기
                for (let j = 0; j < 2; j++) {
                  if (data.teams[j].teamId === data.participants[Did - 1].teamId) {
                    if (data.teams[j].win === 'Win') {
                      temp.push('승리')
                    } else {
                      temp.push('패배')
                    }
                  }
                }
                // 스펠 1 구하기
                let file = spellFile.data
                for (let x in file) {
                  if (file[x].key === String(data.participants[Did - 1].spell1Id)) {
                    temp.push(file[x].name)
                    temp.push('static/spell/' + file[x].id + '.png')
                    break
                  }
                }
                // 스펠 2 구하기
                for (let x in file) {
                  if (file[x].key === String(data.participants[Did - 1].spell2Id)) {
                    temp.push(file[x].name)
                    temp.push('static/spell/' + file[x].id + '.png')
                    break
                  }
                }
                temp.push(data.participants[Did - 1].stats.kills)
                temp.push(data.participants[Did - 1].stats.deaths)
                temp.push(data.participants[Did - 1].stats.assists)
                temp.push(data.participants[Did - 1].stats.champLevel)
                temp.push(data.participants[Did - 1].stats.totalMinionsKilled)
                temp.push(data.participants[Did - 1].stats.totalDamageDealtToChampions)
                temp.push(data.participants[Did - 1].stats.visionWardsBoughtInGame)
                temp.push(data.participants[Did - 1].stats.wardsKilled)
                temp.push(data.participants[Did - 1].stats.wardsPlaced)

                temp.push(this.findMainRunes(data.participants[Did - 1].stats.perkPrimaryStyle, data.participants[Did - 1].stats.perk0))
                temp.push(this.findRunes(data.participants[Did - 1].stats.perkSubStyle))

                let Ifile = itemFile.data
                let item = []
                for (let x in Ifile) {
                  if (x === String(data.participants[Did - 1].stats.item0)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item1)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item2)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item3)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item4)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item5)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  } else if (x === String(data.participants[Did - 1].stats.item6)) {
                    item.push('static/item/' + Ifile[x].image.full)
                  }
                }
                temp.push(item)
                detail2.push(temp)
              }
              array.push(detail1)
              array.push(detail2)
              this.detail.push(array)
            })
          }
          this.isLoading = false
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
      this.clientName = response.data.name
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
            let item = []
            for (let i in Ifile) {
              if (i === String(data.participants[id - 1].stats.item0)) {
                item.push('static/item/' + Ifile[i].image.full)
              } else if (i === String(data.participants[id - 1].stats.item1)) {
                item.push('static/item/' + Ifile[i].image.full)
              } else if (i === String(data.participants[id - 1].stats.item2)) {
                item.push('static/item/' + Ifile[i].image.full)
              } else if (i === String(data.participants[id - 1].stats.item3)) {
                item.push('static/item/' + Ifile[i].image.full)
              } else if (i === String(data.participants[id - 1].stats.item4)) {
                item.push('static/item/' + Ifile[i].image.full)
              } else if (i === String(data.participants[id - 1].stats.item5)) {
                item.push('static/item/' + Ifile[i].image.full)
              } else if (i === String(data.participants[id - 1].stats.item6)) {
                item.push('static/item/' + Ifile[i].image.full)
              }
            }
            array.push(item)
            let detail1 = []
            // 10명 디테일 전적
            for (let i = 0; i < 5; i++) {
              let temp = []
              temp.push(this.findCharacterName(data.participants[i].championId))
              temp.push(this.findCharacterId(data.participants[i].championId))
              temp.push(data.participantIdentities[i].player.summonerName)
              let Did = data.participantIdentities[i].participantId

              // 아이디 값으로 승,패 구하기
              for (let j = 0; j < 2; j++) {
                if (data.teams[j].teamId === data.participants[Did - 1].teamId) {
                  if (data.teams[j].win === 'Win') {
                    temp.push('승리')
                  } else {
                    temp.push('패배')
                  }
                }
              }
              // 스펠 1 구하기
              let file = spellFile.data
              for (let x in file) {
                if (file[x].key === String(data.participants[Did - 1].spell1Id)) {
                  temp.push(file[x].name)
                  temp.push('static/spell/' + file[x].id + '.png')
                  break
                }
              }
              // 스펠 2 구하기
              for (let x in file) {
                if (file[x].key === String(data.participants[Did - 1].spell2Id)) {
                  temp.push(file[x].name)
                  temp.push('static/spell/' + file[x].id + '.png')
                  break
                }
              }
              temp.push(data.participants[Did - 1].stats.kills)
              temp.push(data.participants[Did - 1].stats.deaths)
              temp.push(data.participants[Did - 1].stats.assists)
              temp.push(data.participants[Did - 1].stats.champLevel)
              temp.push(data.participants[Did - 1].stats.totalMinionsKilled)
              temp.push(data.participants[Did - 1].stats.totalDamageDealtToChampions)
              temp.push(data.participants[Did - 1].stats.visionWardsBoughtInGame)
              temp.push(data.participants[Did - 1].stats.wardsKilled)
              temp.push(data.participants[Did - 1].stats.wardsPlaced)

              temp.push(this.findMainRunes(data.participants[Did - 1].stats.perkPrimaryStyle, data.participants[Did - 1].stats.perk0))
              temp.push(this.findRunes(data.participants[Did - 1].stats.perkSubStyle))

              let Ifile = itemFile.data
              let item = []
              for (let x in Ifile) {
                if (x === String(data.participants[Did - 1].stats.item0)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item1)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item2)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item3)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item4)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item5)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item6)) {
                  item.push('static/item/' + Ifile[x].image.full)
                }
              }
              temp.push(item)
              detail1.push(temp)
            }
            let detail2 = []
            for (let i = 5; i < 10; i++) {
              let temp = []
              temp.push(this.findCharacterName(data.participants[i].championId))
              temp.push(this.findCharacterId(data.participants[i].championId))
              temp.push(data.participantIdentities[i].player.summonerName)
              let Did = data.participantIdentities[i].participantId

              // 아이디 값으로 승,패 구하기
              for (let j = 0; j < 2; j++) {
                if (data.teams[j].teamId === data.participants[Did - 1].teamId) {
                  if (data.teams[j].win === 'Win') {
                    temp.push('승리')
                  } else {
                    temp.push('패배')
                  }
                }
              }
              // 스펠 1 구하기
              let file = spellFile.data
              for (let x in file) {
                if (file[x].key === String(data.participants[Did - 1].spell1Id)) {
                  temp.push(file[x].name)
                  temp.push('static/spell/' + file[x].id + '.png')
                  break
                }
              }
              // 스펠 2 구하기
              for (let x in file) {
                if (file[x].key === String(data.participants[Did - 1].spell2Id)) {
                  temp.push(file[x].name)
                  temp.push('static/spell/' + file[x].id + '.png')
                  break
                }
              }
              temp.push(data.participants[Did - 1].stats.kills)
              temp.push(data.participants[Did - 1].stats.deaths)
              temp.push(data.participants[Did - 1].stats.assists)
              temp.push(data.participants[Did - 1].stats.champLevel)
              temp.push(data.participants[Did - 1].stats.totalMinionsKilled)
              temp.push(data.participants[Did - 1].stats.totalDamageDealtToChampions)
              temp.push(data.participants[Did - 1].stats.visionWardsBoughtInGame)
              temp.push(data.participants[Did - 1].stats.wardsKilled)
              temp.push(data.participants[Did - 1].stats.wardsPlaced)

              temp.push(this.findMainRunes(data.participants[Did - 1].stats.perkPrimaryStyle, data.participants[Did - 1].stats.perk0))
              temp.push(this.findRunes(data.participants[Did - 1].stats.perkSubStyle))

              let Ifile = itemFile.data
              let item = []
              for (let x in Ifile) {
                if (x === String(data.participants[Did - 1].stats.item0)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item1)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item2)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item3)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item4)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item5)) {
                  item.push('static/item/' + Ifile[x].image.full)
                } else if (x === String(data.participants[Did - 1].stats.item6)) {
                  item.push('static/item/' + Ifile[x].image.full)
                }
              }
              temp.push(item)
              detail2.push(temp)
            }
            array.push(detail1)
            array.push(detail2)
            this.detail.push(array)
          })
        }
        this.isLoading = false
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
.v-progress-circular {
  margin: 1rem;
}
</style>
