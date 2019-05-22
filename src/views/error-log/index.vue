<template>
  <div class="errPage-container">
    <el-table :data="errorLogs" border>
      <!--<el-table-column label="Message">-->
      <!--<template slot-scope="{row}">-->
      <!--<div>-->
      <!--<span class="message-title">Msg:</span>-->
      <!--<el-tag type="danger">-->
      <!--{{ row.err.message }}-->
      <!--</el-tag>-->
      <!--</div>-->
      <!--<br>-->
      <!--<div>-->
      <!--<span class="message-title" style="padding-right: 10px;">Info: </span>-->
      <!--<el-tag type="warning">-->
      <!--{{ row.vm.$vnode.tag }} error in {{ row.info }}-->
      <!--</el-tag>-->
      <!--</div>-->
      <!--<br>-->
      <!--<div>-->
      <!--<span class="message-title" style="padding-right: 16px;">Url: </span>-->
      <!--<el-tag type="success">-->
      <!--{{ row.url }}-->
      <!--</el-tag>-->
      <!--</div>-->
      <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column label="Stack">-->
      <!--<template slot-scope="scope">-->
      <!--{{ scope.row.err.stack }}-->
      <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column type="index" width="50"/>
      <el-table-column label="Message">
        <template slot-scope="{row}">
          <el-tag type="danger" style="display:inline-block;word-wrap:break-word;white-space:normal;height: auto">
            {{ JSON.stringify(row) }}
          </el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'ErrorLog',
    computed: {
      errorLogs() {
        return this.$store.getters.errorLogs
      }
    }
  }
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
  .message-title {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    padding-right: 8px;
  }
</style>
