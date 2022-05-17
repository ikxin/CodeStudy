<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchView',
  data () {
    return {
      keyWord: 'ikxin'
    }
  },
  methods: {
    searchUsers () {
      this.$bus.$emit('updateListData', {
        isFirst: false,
        isLoading: true,
        errorMsg: '',
        userList: []
      })
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          this.$bus.$emit('updateListData', {
            isLoading: false,
            errorMsg: '',
            userList: response.data.items
          })
        },
        (error) => {
          this.$bus.$emit('updateListData', {
            isLoading: false,
            errorMsg: error,
            userList: []
          })
        }
      )
    }
  }
}
</script>
