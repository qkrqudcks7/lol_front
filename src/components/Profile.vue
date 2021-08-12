<template>
  <v-row justify="center">
    <header class="jumbotron">
      <h1>{{content.username}}님의 개인정보</h1>
    </header><br><br><br>
    <v-expansion-panels popout>
      <v-expansion-panel>
        <v-expansion-panel-header>ID 확인하기</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{content.username}}님의 Id는 <strong>{{content.email}}</strong>입니다.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>권한 확인하기</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{content.username}}님은 <strong>{{findAuthority}}</strong>입니다.
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>여기 뭐넣지</v-expansion-panel-header>
        <v-expansion-panel-content>
          ....
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
import AuthService from '../API/auth_service'

export default {
  name: 'Profile',
  data () {
    return {
      content: ''
    }
  },
  mounted () {
    AuthService.getUserContent()
      .then(response => {
        this.content = response.data
        console.log(this.content)
      }, error => {
        this.content = error.response.data.message
      })
  },
  computed: {
    findAuthority () {
      if (this.content.authorities[0].authority === 'ROLE_USER') {
        return '일반 사용자'
      } else if (this.content.authorities[0].authority === 'ROLE_ADMIN') {
        return '관리자'
      } else {
        return '우수 사용자'
      }
    }
  }
}
</script>

<style scoped>

</style>
