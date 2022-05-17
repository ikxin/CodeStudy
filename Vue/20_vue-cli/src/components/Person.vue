<template>
  <div>
    <h2>人员列表</h2>
    <h2 style="color: pink">Count组件的求和为：{{ sum }}</h2>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">
        {{ person.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'PersonView',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    personList () {
      return this.$store.state.personList
    },
    sum () {
      return this.$store.state.sum
    }
  },
  methods: {
    add () {
      const person = { id: nanoid(), name: this.name }
      this.name = ''
      this.$store.commit('addPerson', person)
    }
  }
}
</script>
