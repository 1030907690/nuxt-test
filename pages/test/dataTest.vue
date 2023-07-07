<template>
  <div class="container">
    <div style="margin-bottom: 20px">
      <button @click="search">查询</button>
      <!-- <button @click="num++">{{ num }}</button> -->

    </div>

    <client-only>

      <el-table :data="tableData" style="width: 100%">

        <el-table-column label="id" prop="id" width="180">

        </el-table-column>

        <el-table-column label="a1" prop="a1" width="180">

        </el-table-column>
        <el-table-column label="a2" prop="a2" width="180">

        </el-table-column>
        <el-table-column label="a3" prop="a3" width="180">

        </el-table-column>
        <el-table-column label="a4" prop="a4" width="180">

        </el-table-column>
        <el-table-column label="a5" prop="a5" width="180">

        </el-table-column>
        <el-table-column label="a6" prop="a6" width="180">

        </el-table-column>
        <el-table-column label="a6" prop="a6" width="180">

        </el-table-column>
        <el-table-column label="a7" prop="a7" width="180">

        </el-table-column>
        <el-table-column label="a8" prop="a8" width="180">
        </el-table-column>

        <el-table-column label="a9" prop="a9" width="180">
        </el-table-column>
        
      </el-table>
    </client-only>
  </div>
</template>
<script>
export default {
  name: "dataTest",
  auth: false,

  data() {
    return {
      tableData: [],
      // num: 0,

    }
  },

  mounted() {
    // this.search()
  },
  methods: {
    search() {
      const { data } = this.getData()
   
        // this.tableData = data
      this.setData(data)
    },
    // 模拟请求的数据
    getData() {
      const arr = []
      let i = 1
      while (i--) {
        const item = { id: i, a0: 1, a1: 1, a2: 1, a3: 1, a4: 1, a5: 1, a6: 1, a7: 1, a8: 1, a9: 1 }
        arr.push(item)
      }

      return { data: arr}
    },
    setData(data) {
      if (!data.length) return

      // 我们把数据切割成,进行批次渲染
      requestAnimationFrame(async () => {
        const num = 100
        this.tableData.push(...data.slice(0, num))
        this.setData(data.slice(num))
      })
    },
  },
}
</script>