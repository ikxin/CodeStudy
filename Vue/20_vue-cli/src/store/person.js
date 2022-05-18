// 人员相关配置
export default {
  // 开启命名空间
  namespaced: true,
  actions: {
    addPersonChen (context, value) {
      if (value.name.indexOf('陈') === 0) {
        context.commit('addPerson', value)
      }
    }
  },
  mutations: {
    addPerson (state, value) {
      state.personList.unshift(value)
    }
  },
  state: {
    personList: [
      { id: '001', name: '张三' }
    ]
  },
  getters: {
    firstPersonName (state) {
      return state.personList[0].name
    }
  }
}
