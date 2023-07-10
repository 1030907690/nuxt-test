<template>
    <div>
        MyTable component：
        <div>
            <!-- 使用了 ant-design 的组件 -->
            <a-table
                :data-source="tableData"
                :columns="columns"
                :row-key="record => record.id"
                :pagination="false"
              >
                <template
                  v-for="key in keys"
                  :prop="key"
                  :laba="key"
                  #[key]="text, row"
                >
                {{ row[key] }}
                </template>
              </a-table>
          </div>
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