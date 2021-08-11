<template>
  <div id="writeBoard">
    <div class="container" style="margin-top:100px">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card shadow">
            <div class="card-body">
              <div class="form-group">
                <label for="writer">작성자</label>
                <input type="text" id="writer" class="form-control" v-model="currentUser" disabled="disabled"/>
              </div>
              <div class="form-group">
                <label for="localDateTime">작성날짜</label>
                <input type="text" id="localDateTime" v-model="localDateTime"  disabled="disabled"/>
              </div>
              <div class="form-group">
                <label for="subject">제목</label>
                <input type="text" id="subject" class="form-control" v-model="boardRequest.subject"/>
              </div>
              <div class="form-group">
                <label>내용</label>
                <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
                <button v-on:click="emptyEditor()">Empty the editor</button>
              </div>
<!--              <div class="form-group">-->
<!--                <label for="img">첨부 이미지</label>-->
<!--                <input type="file" id="img" @change="selectFile" ref="myimg" class="form-control" accept="image/*"/>-->
<!--              </div>-->
              <div class="form-group">
                <div class="text-right">
                  <button @click="submitBoard" class="btn btn-primary">작성하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BoardAPI from '../API/boardAPI'
export default {
  name: 'WriteBoard',
  data () {
    return {
      editorData: '',
      editorConfig: {
      },
      img: '',
      boardRequest: {subject: '', text: '', imgUrl: ''}
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.auth.initialState.user.username
    },
    localDateTime () {
      let today = new Date()
      return today.toLocaleString()
    }
  },
  methods: {
    emptyEditor () {
      this.boardRequest.text = ''
    },
    submitBoard () {
      this.boardRequest.text = this.editorData
      const formData = new FormData()
      formData.append('subject', this.boardRequest.subject)
      formData.append('text', this.boardRequest.text)
      formData.append('multipartFile', this.img)
      BoardAPI.submitBoard(formData).then(response => {
        if (response.status === 200) {
          alert('등록 되었습니다.')
          this.$router.push('boardList')
        } else {
          alert('등록에 실패했습니다.')
        }
      })
    },
    selectFile () {
      this.img = this.$refs.myimg.files[0]
    }
  }
}
</script>

<style scoped>

</style>
