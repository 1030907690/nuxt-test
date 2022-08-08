<!-- Please remove this file from your project -->
<template>
   <div>
    tutorial
    <nuxt-link to="/comment">评论</nuxt-link>
    <nuxt-link to="/login">登录</nuxt-link>
    <el-button @click="loginOut">退出</el-button>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',

    methods: {
      loginOut() {
          this.$auth.logout().then(res=>{
              this.$router.push('/login')
          })
      }
  }


}


</script>
