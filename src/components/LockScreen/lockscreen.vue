<template>
  <div class="lock-screen-btn-con" @click="lockScreen">
    <el-tooltip content="锁屏" placement="bottom">
      <svg-icon icon-class="password"/>
    </el-tooltip>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: 'LockScreen',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        lockScreenSize: 0
      }
    },
    methods: {
      lockScreen() {
        const lockScreenBack = document.getElementById('lock_screen_back')
        lockScreenBack.style.transition = 'all 3s'
        lockScreenBack.style.zIndex = 10000
        lockScreenBack.style.boxShadow = '0 0 0 ' + this.lockScreenSize + 'px #667aa6 inset'
        Cookies.set('last_page_name', this.$route.name) // 本地存储锁屏之前打开的页面以便解锁后打开
        setTimeout(() => {
          lockScreenBack.style.transition = 'all 0s'
          //window.removeEventListener('resize', this.resizeEvent)
          this.$router.push({
            name: 'locking'
          })
        }, 800)
        Cookies.set('locking', '1')
        localStorage.CookieLocking = '1'
      },
      setLockBackSize() {
        const dom = document.body.getBoundingClientRect()
        const x = dom.width
        const y = dom.height
        const r = Math.sqrt(x * x + y * y)
        return parseInt(r)
      },
      resizeEvent() {
        const lockScreenBack = document.getElementById('lock_screen_back')
        const size = this.setLockBackSize()
        this.lockScreenSize = size
        lockScreenBack.style.transition = 'all 0s'
        lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
      }
    },
    mounted() {
      let lockScreenBack
      if (!document.getElementById('lock_screen_back')) {
        const lockdiv = document.createElement('div')
        lockdiv.setAttribute('id', 'lock_screen_back')
        lockdiv.setAttribute('class', 'lock-screen-back')
        document.body.appendChild(lockdiv)
        lockScreenBack = document.getElementById('lock_screen_back')
        //window.addEventListener('resize', this.resizeEvent)
      } else {
        lockScreenBack = document.getElementById('lock_screen_back')
      }
      const size = this.setLockBackSize()
      this.lockScreenSize = size
      lockScreenBack.style.transition = 'all 3s'
      lockScreenBack.style.width = lockScreenBack.style.height = size + 'px'
    }
  }
</script>

<style>
  .lock-screen-back {
    border-radius: 50%;
    z-index: -1;
    box-shadow: 0 0 0 0 #667aa6 inset;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    transition: all 3s;
  }
</style>

