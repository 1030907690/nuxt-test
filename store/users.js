export const state = () => ({
  err: 1,
  msg: '未登录哈哈',
  token: '',
  data: {}
})

export const mutations = {
  M_UPDATE_USER(user, payload) {
    user.err = payload.err
    user.msg = payload.msg
    user.data = payload.data
    user.token = payload.token
    console.log('users.js state users ',payload.token , state)
  }
}

export const actions = {
  A_UPDATE_USER({commit, user}, payload) {
    // 异步业务
    commit('M_UPDATE_USER', payload)
  }
}
