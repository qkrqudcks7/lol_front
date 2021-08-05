<template>
<div id="BoardList">
  <div class="container" style="margin-top:100px">
    <div class="card shadow">
      <div class="card-body">
        <h4 class="card-title">Board</h4>
        <b-table striped hover :items="boardList" :fields="fields" :per-page="perPage" :current-page="currentPage" small @row-clicked="getOneBoard"></b-table>
        <div class="text-right">
          <button class="btn btn-primary" @click="writeBoard">글쓰기</button>
        </div>
      </div>
    </div>
    <div class="text-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</div>
</template>

<script>
import BoardAPI from '../API/boardAPI'
export default {
  name: 'BoardList',
  data () {
    return {
      fields: [
        {
          key: 'id',
          label: '글번호'
        },
        {
          key: 'writer',
          label: '작성자'
        },
        {
          key: 'subject',
          label: '제목'
        },
        {
          key: 'viewCount',
          label: '조회수'
        },
        {
          key: 'localDateTime',
          label: '작성날짜'
        }
      ],
      currentPage: 1,
      perPage: 5,
      boardList: []
    }
  },
  computed: {
    rows () {
      return this.boardList.length
    }
  },
  methods: {
    getOneBoard (item, index, e) {
      this.$router.push({name: 'oneBoard', params: {id: item.id}})
    },
    writeBoard () {
      this.$router.push({name: 'writeBoard'})
    }
  },
  mounted () {
    BoardAPI.getAllBoard()
      .then(response => {
        this.boardList = response.data
        console.log(this.boardList)
      })
  }
}
</script>

<style scoped>

</style>
