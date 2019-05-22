<template>
  <div class="app-container">
    <div style="margin-bottom:15px;">
      Your Menus: {{ roles }}
    </div>
    Switch roles:
    <el-radio-group v-model="switchRoles" @change="handleRolesChange">
      <el-radio-button label="zhangsan" />
      <el-radio-button label="admin" />
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    name: 'PagePermission',
    data() {
      return {
        switchRoles: this.$store.getters.token.toString().replace('-token', '')
      }
    },
    computed: {
      roles() {
        return this.$store.getters.roles
      }
    },
    methods: {
      async handleRolesChange(val) {
        await this.$store.dispatch('user/changeRoles', val)
        // this.$router.push({ path: '/permission/index?' + +new Date() })
      }
    }
  }
</script>
