<template>
  <div>
    评论页面
    <el-table :data="tableData" style="width: 540px">

      <el-table-column prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column prop="content" label="内容" width="180">
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180">
      </el-table-column>
    </el-table>

    <el-button @click="$router.push('/')">首页</el-button>
    <el-button @click="fetchSomething()">测试保存用户信息</el-button>
    {{ tableData[0].createTime | date }}
  </div>
</template>
<script>
export default {
  layout: 'base',
  // auth:false,
  // middleware: 'auth-global',
  data() {
    return {
      tableData: [],
      titleT: '评论页面哈'
    }
  },
  head() {
    return {
      title: this.titleT,
      ip: '',
      meta: [
        {
          hid: '评论页面哈',
          name: '评论页面哈',
          content: 'My custom 评论页面哈'
        }
      ]
    }
  },
  //   asyncData({ params }) {

  //   return axios.get(`/test/comment`).then(res => {

  //     // console.log(res)
  //     return { tableData:res.data.rows,titleT:'这是评论页面title啊' }
  //   })
  // },


  async asyncData({ $axios }) {
    const tableDatas = await $axios.$get('/api/test/comment')
    console.log(tableDatas)
    return { tableData: tableDatas.rows }
  },


  async fetch({ store, params, $axios }) {
    console.log('fetch')
    let { data } = await $axios.get('/api/test/comment')
    // console.log(data)
    // console.log(this.tableData)
    // store.commit('setStars', data)
  },
  created() {
    // this.fetchSomething()
    // console.log('fetchSomething token ',this.$store.state.users.token)

  },
  methods: {
    fetchSomething() {
      // const ip = await this.$axios.$get('http://localhost:8081/api/test/comment')
      // console.log(ip)
      // this.tableData = ip.rows
      this.$cookies.set('user', { err: 2, msg: '登录', token: 'tkxxxx' })
      this.$store.commit('users/M_UPDATE_USER', { err: 2, msg: '登录', token: 'txxxxx' })


    }
  }

}

</script>
