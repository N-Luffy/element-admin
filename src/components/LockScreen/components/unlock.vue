<template>
  <transition name="show-unlock">
    <div v-if="showUnlock" class="unlock-body-con" @keydown.enter="handleUnlock">
      <div :style="{marginLeft: avatorLeft}" class="unlock-avator-con" @click="handleClickAvator">
        <img :src="avatorPath" class="unlock-avator-img">
        <div class="unlock-avator-cover">
          <span>
            <svg-icon icon-class="icon-unlocked" style="width: 30px;height: 30px"/>
          </span>
          <p>解锁</p>
        </div>
      </div>
      <div :style="{marginLeft: avatorLeft}" class="unlock-avator-under-back"/>
      <div class="unlock-input-con">
        <div class="unlock-input-overflow-con">
          <div :style="{right: inputLeft}" class="unlock-overflow-body">
            <input ref="inputEle" v-model="password" class="unlock-input" type="password" placeholder="密码同登录密码">
            <button ref="unlockBtn" class="unlock-btn" @mousedown="unlockMousedown" @mouseup="unlockMouseup" @click="handleUnlock">
              <svg-icon icon-class="icon-key" style="margin-right: 5px" />
            </button>
          </div>
        </div>
      </div>
      <div class="unlock-locking-tip-con">已锁定</div>
    </div>
  </transition>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: 'Unlock',
    data() {
      return {
        avatorLeft: '0px',
        inputLeft: '400px',
        password: '',
        check: null
      }
    },
    props: {
      showUnlock: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      avatorPath() {
        return this.$store.getters.avatar // 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg'// localStorage.avatorImgPath
      }
    },
    methods: {
      validator() {
        return true // 你可以在这里写密码验证方式，如发起ajax请求将用户输入的密码this.password与数据库用户密码对比
      },
      handleClickAvator() {
        this.avatorLeft = '-180px'
        this.inputLeft = '0px'
        this.$refs.inputEle.focus()
      },
      handleUnlock() {
        if (this.validator()) {
          this.avatorLeft = '0px'
          this.inputLeft = '400px'
          this.password = ''
          Cookies.set('locking', '0')
          localStorage.CookieLocking = '0'
          this.$emit('on-unlock')
        } else {
          this.$message.error('密码错误,请重新输入。如果忘了密码，清除浏览器缓存重新登录即可，这里没有做后端验证')
        }
      },
      unlockMousedown() {
        this.$refs.unlockBtn.className = 'unlock-btn click-unlock-btn'
      },
      unlockMouseup() {
        this.$refs.unlockBtn.className = 'unlock-btn'
      }
    }
  }
</script>

<!--<style lang="less" scoped>-->
<!--import '../styles/unlock.less';-->
<!--</style>-->

<style scoped>
  .unlock-body-con {
    position: absolute;
    width: 400px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -200px;
    -webkit-transform-origin: center center;
    transform-origin: center center;
    z-index: 10;
  }
  .unlock-body-con .unlock-avator-con {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    cursor: pointer;
    transition: all .5s;
    z-index: 12;
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.3);
  }
  .unlock-body-con .unlock-avator-con .unlock-avator-img {
    width: 100%;
    height: 100%;
    display: block;
    z-index: 7;
  }
  .unlock-body-con .unlock-avator-con .unlock-avator-cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 11600;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity .2s;
    color: white;
  }
  .unlock-body-con .unlock-avator-con .unlock-avator-cover span {
    display: block;
    margin: 20px auto 5px;
    text-align: center;
  }
  .unlock-body-con .unlock-avator-con .unlock-avator-cover p {
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
  .unlock-body-con .unlock-avator-con:hover .unlock-avator-cover {
    opacity: 1;
    transition: opacity .2s;
  }
  .unlock-body-con .unlock-avator-under-back {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-45px, -50%);
    transform: translate(-45px, -50%);
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #667aa6;
    transition: all .5s;
    z-index: 5;
  }
  .unlock-body-con .unlock-input-con {
    position: absolute;
    height: 70px;
    width: 350px;
    top: 15px;
    right: 0px;
  }
  .unlock-body-con .unlock-input-con .unlock-input-overflow-con {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  .unlock-body-con .unlock-input-con .unlock-input-overflow-con .unlock-overflow-body {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: all .5s ease .5s;
  }
  .unlock-body-con .unlock-input-con .unlock-input-overflow-con .unlock-overflow-body .unlock-input {
    float: left;
    display: block;
    box-sizing: content-box;
    height: 22px;
    width: 230px;
    font-size: 18px;
    outline: none;
    padding: 11px 10px 11px 30px;
    border: 2px solid #e2ddde;
    margin-top: 10px;
  }
  .unlock-body-con .unlock-input-con .unlock-input-overflow-con .unlock-overflow-body .unlock-btn {
    float: left;
    display: block;
    /*font-size: 20px;*/
    font-size: 37px;
    /*padding: 7px 30px;*/
    padding: -1px 30px;
    cursor: pointer;
    border-radius: 0 25px 25px 0;
    border: 2px solid #e2ddde;
    border-left: none;
    background: #2d8cf0;
    outline: none;
    transition: all .2s;
    margin-top: 10px;
  }
  .unlock-body-con .unlock-input-con .unlock-input-overflow-con .unlock-overflow-body .unlock-btn:hover {
    background: #5cadff;
    box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.2);
  }
  .unlock-body-con .unlock-input-con .unlock-input-overflow-con .unlock-overflow-body .click-unlock-btn {
    background: #2b85e4 !important;
  }
  .unlock-body-con .unlock-locking-tip-con {
    width: 100px;
    height: 30px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    bottom: -80px;
    color: white;
    font-size: 18px;
  }
  @-webkit-keyframes unlock-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    80% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    88% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes unlock-in {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    80% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    88% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes unlock-out {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    60% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @keyframes unlock-out {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    60% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  .show-unlock-enter-active {
    -webkit-animation: unlock-in 1.4s ease;
    animation: unlock-in 1.4s ease;
  }
  .show-unlock-leave-to {
    opacity: 0;
  }
  .show-unlock-leave-active {
    transition: opacity .2s;
  }
  .unlock-con {
    width: 100%;
    height: 100%;
  }
</style>
