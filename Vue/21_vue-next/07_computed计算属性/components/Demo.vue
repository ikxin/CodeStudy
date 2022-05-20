<template>
  <h2>我是App组件</h2>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <h2>姓名：{{ person.fullName }}</h2>
  姓名：<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })

    // 计算属性_简写
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })
    // 计算属性_完整写法
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        const nameArray = value.split('-')
        person.firstName = nameArray[0]
        person.lastName = nameArray[1]
      }
    })

    return {
      person
    }
  },
  // computed: {
  //   fullName() {
  //     return this.person.firstName + ' / ' + this.person.lastName
  //   }
  // }
}
</script>