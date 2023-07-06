<template>
    <div class="container">
        <div style="margin-bottom: 20px">
          <button @click='search'>查询</button>
        </div>
    
   
          <div  v-for="(item,index) in tableData" :key="index">
            {{ item }}
          </div>
    </div>
</template>
<script>
export default {
  name: "data",
  auth: false,

  data() {
    return {
      tableData: [],
      keys: [],
      columns: [],
    }
  },

  mounted () {
    // this.search()
  },
  methods: {
    search() {
      const { data, keys } = this.getData()
      this.keys = keys
      this.columns = keys.map(key => ({
        title: key,
        key: key,
        dataIndex: key,
        scopedSlots: { customRender: key },
      }))
      this.tableData = data

        // this.setData(data)
    },
    // 模拟请求的数据
    getData() {
      const arr = []
      let i = 1000
      while (i--) {
        const item = { id: i, a0: 1, a1: 1, a2: 1, a3: 1, a4: 1, a5: 1, a6: 1, a7: 1, a8: 1, a9: 1 }
        const data = { id: i, b0: item, b1: item, b2: item, b3: item, b4: item, b5: item, b6: item, b7: item, b8: item, b9: item }

        arr.push(data)
      }

      return { data: arr, keys: Object.keys(arr[0]) }
    },
    setData(data) {
        if (!data.length) return
        
        // 我们把数据切割成十份进行批次渲染
        requestAnimationFrame(async () => {
            const num = 100
            this.tableData.push(...data.slice(0, num))
            this.setData(data.slice(num))
        })
    },
  },
}
</script>