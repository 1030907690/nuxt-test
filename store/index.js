// 主模块

//state
export const state = () => ({
  bNav: false,
  bLoading: false
})

//mutations
export const mutations = {
  M_UPDATE_NAV(state, payload) {
    state.bNav = payload
  },
  M_UPDATE_LOADING(state, payload) {
    state.bLoading = payload
  }
}

// actions
export const actions = {
  // 利用nuxtServerInit 钩子传递用户信息到下个页面
  nuxtServerInit(store, { app: { $cookies } }) {
    // 初始化东西到store里 token信息
    // console.log('nuxtServerInit', store, context)
    console.log('nuxtServerInit')
    let user = $cookies.get('user') ? $cookies.get('user') : {err:2, msg: '未登录', token: ''}
    store.commit('users/M_UPDATE_USER', user)
    console.log('nuxtServerInit user ' ,user, store.state.users.msg)

  }
}

// getters
export const getters = {
  getNav(state) {
    return state.bNav ? '显示' : '隐藏'
  }
}
