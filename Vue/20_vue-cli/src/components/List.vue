<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      v-show="userInfo.userList.length"
      v-for="user in userInfo.userList"
      :key="user.login"
      class="card"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <div v-show="userInfo.isFirst">欢迎使用！</div>
    <!-- 展示加载中 -->
    <div v-show="userInfo.isLoading">加载中...</div>
    <!-- 展示错误信息 -->
    <div v-show="userInfo.errorMsg">{{ userInfo.errorMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  data () {
    return {
      userInfo: {
        userList: [],
        isFirst: true,
        isLoading: false,
        errorMsg: ''
      }
    }
  },
  mounted () {
    this.$bus.$on('updateListData', (dataObj) => {
      this.userInfo = { ...this.userInfo, ...dataObj }
    })
  }
}
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
