<template>
  <div>
    <ul>
      <li v-for="message in messageList" :key="message.id">
        <!-- 利用query传递参数 -->
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`"> -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: message.id,
              title: message.title,
            },
          }"
        >

        <!-- 利用params传递参数（不能用path，只能用name来写路径） -->
        <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`"> -->
        <!-- <router-link
          :to="{
            name: 'Detail',
            params: {
              id: message.id,
              title: message.title,
            },
          }"
        > -->
          {{ message.title }}
        </router-link>
        <button @click="pushShow(message)">push查看</button>
        <button @click="replaceShow(message)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MeaasgeView',
  data () {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' }
      ]
    }
  },
  methods: {
    pushShow (message) {
      this.$router.push({
        name: 'Detail',
        query: {
          id: message.id,
          title: message.title
        }
      })
    },
    replaceShow (message) {
      this.$router.replace({
        path: '/home/message/detail',
        query: {
          id: message.id,
          title: message.title
        }
      })
    }
  }
}
</script>
