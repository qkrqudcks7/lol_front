<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet v-if="currentUser"
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div><a href="/profile" class="nav-link">
          <font-awesome-icon icon="user" />
          {{currentUser.username}}
        </a></div>
        <div><a href class="nav-link" @click="logOut">
          <font-awesome-icon icon="sign-out-alt" /> LogOut
        </a></div>
      </v-sheet>
      <v-sheet v-if="!currentUser"
               color="grey lighten-4"
               class="pa-4"
      >
        <div> <a href="/register" class="nav-link">
          <font-awesome-icon icon="user-plus" /> Sign Up
        </a></div>
        <div><a href="/login" class="nav-link">
          <font-awesome-icon icon="sign-in-alt" /> Login
        </a></div>
      </v-sheet>
      <v-divider></v-divider>

      <v-list>
        <v-list-item v-if="currentUser">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>내 정보</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentUser">
          <v-list-item-icon >
            <v-icon>mdi-inbox-arrow-down</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>#</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="currentUser">
          <v-list-item-icon>
            <v-icon>mdi-inbox-arrow-down</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>#</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <!--        -->
      </v-app-bar-nav-icon>
      <v-toolbar-title><a href="/" class="nav-link">Park.GG</a></v-toolbar-title>
      <v-toolbar-title><a href="/champ" class="nav-link">챔피언</a></v-toolbar-title>
      <v-toolbar-title><a href="/boardList" class="nav-link">게시판</a></v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: null,
    user: {}
  }),
  computed: {
    currentUser () {
      return this.$store.state.auth.initialState.user
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
