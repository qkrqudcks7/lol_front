<template>
  <div id="OneBoard">
    <div class="container" style="margin-top:100px">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card shadow">
            <div class="card-body">
              <div class="form-group">
                <label for="writer">작성자</label>
                <input type="text" id="writer" v-model="myBoard.writer" class="form-control" disabled="disabled"/>
              </div>
              <div class="form-group">
                <label for="localDateTime">작성날짜</label>
                <input type="text" id="localDateTime" v-model="myBoard.localDateTime" class="form-control" disabled="disabled"/>
              </div>
              <div class="form-group">
                <label for="subject">제목</label>
                <input type="text" v-model="myBoard.subject" id="subject"  class="form-control" disabled="disabled"/>
              </div>
              <div class="form-group">
                <label>내용</label>
                <ckeditor type="inline" v-model="myBoard.text" :config="editorConfig"></ckeditor>
              </div>
              <br>
              <div class="form-group" v-if="myBoard.imgUrl">
                <img :src="myBoard.imgUrl" class="form-control">
              </div>
              <div class="form-group">
                <div class="text-right">
                  <button @click="addLike"><v-icon>mdi-heart</v-icon>{{myBoard.likeCount}}</button>&nbsp;&nbsp;
                  <button class="btn btn-primary" @click="BoardList">목록으로</button>
                  <span v-if="myBoard.userId === this.loginUser.username"><button class="btn btn-info" @click="ModifyBoard">수정하기</button>
                  <button class="btn btn-danger" @click="DeleteBoard">삭제하기</button></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class = "table table-striped">
          <thead>
          <tr>
            <th>작성자</th>
            <th>내용</th>
            <th>작성시간</th>
            <th>좋아요</th>
            <th>삭제</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(i,index) in commentList" :key="index">
            <td>{{i.writer}}</td>
            <td>{{i.comment}}</td>
            <td><small>{{i.localDateTime}}</small></td>
            <td><v-icon @click="addLikeComment(i.id)">mdi-heart</v-icon>{{i.likeCount}}</td>
            <button v-if="currentUser === i.email" class="btn btn-danger" @click="DeleteComments(i.id)">삭제하기</button>
          </tr>
          </tbody>
        </table>
        <div class="form-signing">
          <h2><label for="comment" class = "label label-default">댓글입력</label></h2>
          <textarea id="comment" v-model="commentForm.comment" class="form-control" placeholder="내용을 입력해주세요" required></textarea>
          <br>
          <button class = "btn btn-info" type = "submit" @click="submitComment">등록하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardAPI from '../API/boardAPI'
import axios from 'axios'
export default {
  name: 'OneBoard',
  data () {
    return {
      editorConfig: {
        // The configuration of the editor.
      },
      myBoard: {},
      commentList: [],
      commentForm: {id: '', comment: ''},
      email: ''
    }
  },
  computed: {
    boardId () {
      return this.$route.params.id
    },
    loginUser () {
      if (this.$store.state.auth.initialState.user) {
        return this.$store.state.auth.initialState.user
      } else {
        return ''
      }
    },
    currentUser () {
      return this.$store.state.auth.initialState.user.username
    }
  },
  methods: {
    addLike () {
      this.email = this.currentUser
      BoardAPI.addLikeToBoard(this.boardId, this.email).then(response => {
        BoardAPI.getOneBoard(this.boardId).then(result => {
          this.myBoard = result.data
        })
        BoardAPI.getComment(this.boardId).then(result => {
          this.commentList = result.data
        })
      })
    },
    addLikeComment (id) {
      this.email = this.currentUser
      BoardAPI.addLikeToComment(id, this.email).then(response => {
        BoardAPI.getOneBoard(this.boardId).then(result => {
          this.myBoard = result.data
        })
        BoardAPI.getComment(this.boardId).then(result => {
          this.commentList = result.data
        })
      })
    },
    BoardList () {
      this.$router.push('boardList')
    },
    ModifyBoard () {
      this.$router.push({name: 'modifyBoard', params: {id: this.boardId}})
    },
    DeleteBoard () {
      BoardAPI.deleteBoard(this.boardId).then(() => {
        this.$router.push('boardList')
      })
    },
    submitComment () {
      this.commentForm.id = this.loginUser.id
      axios.post(`http://localhost:8080/api/board/comments/${this.boardId}`, this.commentForm)
        .then(() => {
          this.commentForm.comment = ''
          axios.get(`http://localhost:8080/api/board/comments/${this.boardId}`)
            .then(result => {
              this.commentList = result.data
            })
        })
        .catch(error => {
          console.log(error)
        })
    },
    DeleteComments (id) {
      BoardAPI.deleteComment(id).then(response => {
        axios.get(`http://localhost:8080/api/board/comments/${this.boardId}`)
          .then(result => {
            this.commentList = result.data
          })
      })
    }
  },
  mounted () {
    BoardAPI.getOneBoard(this.boardId).then(result => {
      this.myBoard = result.data
    })
    BoardAPI.getComment(this.boardId).then(result => {
      this.commentList = result.data
    })
  }
}
</script>

<style scoped>

</style>
