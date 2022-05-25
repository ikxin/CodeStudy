<!--
 * @Author: 一纸忘忧 i@ikxin.com
 * @Date: 2022-05-20 13:25:50
 * @LastEditors: 一纸忘忧 i@ikxin.com
 * @LastEditTime: 2022-05-25 13:18:32
 * @FilePath: \21_vue-next\src\components\Demo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作时间：{{ job.time.day }}</h2>
  <div>座驾：{{ person.car }}</div>
  <button @click="age++">修改年龄</button>
  <button @click="job.time.day++">修改时间</button>
  <button @click="showRawPerson">输出原始的对象</button>
  <br>
  <button @click="addCar">添加一台车</button>
  <hr>
  <h2>num的值为：{{ num }}</h2>
  <button @click="num++">修改num</button>
</template>

<script>
import { markRaw, reactive, ref, toRaw, toRefs } from 'vue'

export default {
  name: 'DemoView',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        time: {
          day: 996
        }
      }
    })

    let num = ref(0)

    function showRawPerson() {
      // 将一个由reactive生成的响应式对象转为普通对象
      console.log(toRaw(person))
    }

    function addCar() {
      let car = { name: '特斯拉', price: '100w' }
      // 标记一个对象，使其永远不会再成为响应式对象
      person.car = markRaw(car)
    }

    return {
      num,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    }
  }
}
</script>