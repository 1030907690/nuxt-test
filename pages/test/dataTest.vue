<template>
    <div class="container">
      <div style="margin-bottom: 20px">
        <button @click="search">查询</button>
        <button @click="num++">{{ num }}</button>
  
      </div>
  
    
      <!-- <my-tabel-el :tableData="tableData" :keys="keys"></my-tabel-el> -->
    
      <client-only>
  
        <el-table :data="tableData" style="width: 100%">
  
            <el-table-column :label="key" :prop="key" width="180" v-for="key in keys" :key="key">
                <template slot-scope="scope">
                    <span>
                      {{ scope.row[key] }}
                    </span>
                </template>
            </el-table-column>
  
          
        </el-table>
      </client-only>  
    </div>
  </template>
  <script>
import MyTabelEl from '~/components/MyTabelEl.vue'
  export default {
  components: { MyTabelEl },
    name: "dataTest",
    auth: false,
  
    data() {
      return {
        tableData: [],
        num: 0,
        keys: [],
        columns: [],

      }
    },
  
    mounted() {

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
          // this.tableData = data
        this.setData(data)
      },
      // 模拟请求的数据
      getData() {
        const arr = []
        let i = 1000
        while (i--) {
            const item = { id: i, a0: 1, a1: 1, a2: 1, a3: 1, a4: 1,  a5: 1, a6: 1, a7: 1, a8: 1, a9: 1}
            const data = { id: i, b0: item, b1: item, b2: item, b3: item, b4: item,  b5: item, b6: item, b7: item, b8: item, b9: item }

          arr.push(data)
        }
  
        return { data: arr, keys: Object.keys(arr[0]) }
      },
      setData(data) {
        if (!data.length) {
            console.log("加载完成");
            return
        }
        
  
        // 我们把数据切割成,进行批次渲染
        requestAnimationFrame(async () => {
          const num = 1000
          this.tableData.push(...data.slice(0, num))
          this.setData(data.slice(num))
        })
      },
    },
  }
  </script>