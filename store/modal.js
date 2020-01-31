const state = () => ({
  modal: false,
  desserts: [],
  value: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  circleValue: 0
})

const mutations = {
  setModalStatus (state, data) {
    state.modal = data
    if (!data) {
      state.desserts = [
        {
          name: '高岸 聖',
          department: '営業部第１',
          concentration: 65,
          action: '多部署上司とのナナメ面談の実施'
        },
        {
          name: '小原 千佳',
          department: '営業部第１',
          concentration: 72,
          action: '新規プロジェクトへのアサイン'
        },
        {
          name: '坂尻 愛明',
          department: '営業部第１',
          concentration: 23,
          action: '1on1 ミーティングの設定'
        },
        {
          name: '奥岡 けんと',
          department: '営業部第１',
          concentration: 32,
          action: 'コミュニケーションの活性化'
        },
        {
          name: '深野 嗣',
          department: '営業部第１',
          concentration: 67,
          action: '新規プロジェクトへのアサイン'
        }
      ]
      state.value = [0, 45, 47, 54, 43, 55, 58, 42, 41, 35, 38, 43, 45, 46, 52]
      state.circleValue = 34
    } else {
      state.desserts = []
      state.value = []
      state.circleValue = 0
    }
  },
  logoutUserInfo (state) {
    state.user = {}
    state.jwt = ''
    state.loggedIn = false
  }
}

const actions = {
  changeModalStatus ({ commit }, res) {
    commit('setModalStatus', res)
  }
}

export default {
  state,
  mutations,
  actions
}
