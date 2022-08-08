export default ({userAgent,store, route, redirect, params, query, req, res }) => {
  userAgent = process.server
  ? req.headers['user-agent']
  : navigator.userAgent
  // context 服务端上下文
  // 全局守卫业务
  console.log('middleware auth  ' ,route.fullPath , userAgent) 

  // store状态树信息
  // route 一条目标路由信息
  //redirect 路由的强制跳转
  // params query 校验参数的合理性
  // console.log('全局守卫前置守卫')
  // redirect('/')
}
