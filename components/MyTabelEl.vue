<template>
    <div>
        MyTableEl component：


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
export default {
    name:"MyTable",
    props: ['keys', 'tableData', 'columns'],
    data () {
        return {
            
        }
    },
}
</script>