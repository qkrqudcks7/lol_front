<template>
  <v-app name="Main">
    <div class="col-md-6 offset-md-3">
      <img src="/static/park.png" width="500"><br><br>
      <div>
        <input type="text" class="form-control" v-model="userInput" @keyup.enter="addNewTodo">
        <v-btn block color="secondary" dark @click="addNewTodo">PARK.GG</v-btn>
      </div>

      <div class="list-group mb-4">
        <button class="list-group-item text-left" v-bind:key="i"  v-for=" i in activeTodoList" @click="toggleTodoState(i)">
          {{i.label}}
        </button>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      userInput: '',
      todoList: [],
      currentState: 'active'
    }
  },
  computed: {
    activeTodoList () {
      return this.todoList.filter(i => this.currentState === 'all' || i.state === this.currentState)
    }
  },
  methods: {
    addNewTodo () {
      this.todoList.push({
        label: this.userInput,
        state: 'active'
      })
      this.$router.push({name: 'home', params: {name: this.userInput}})
    },
    toggleTodoState (todo) {
      todo.state = todo.state === 'active' ? 'done' : 'active'
    }
  }
}
</script>

<style scoped>

</style>
