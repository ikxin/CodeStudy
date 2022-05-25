<template>
  <h2>{{ keyWord }}</h2>
  <input type="text" v-model="keyWord">
</template>

<script>
import { customRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // let keyWord = ref('hello')
    let keyWord = myRef('hello')

    // 自定义一个ref
    function myRef(value) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            // 通知Vue追踪value的变化
            track()
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              // 通知Vue重新解析模板
              trigger()
            }, 500)
          }
        }
      })
    }

    return {
      keyWord
    }
  }
}
</script>