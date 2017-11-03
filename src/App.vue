<template>
  <div id="app">
    <div class="tab-box">
      <div class="tab-item">
        <router-link to="/downBrands">
          闪降
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop">
          商城
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopcart">
          购物车
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/myself">
          我的
        </router-link>
      </div>
    </div>
    <router-view :mall="mall" :girl="girl" :boy="boy"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        mall: {},
        girl: {},
        boy: {}
      }
    },
    created () {
      let self = this
      this.$axios.get('/api/mall')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            self.mall = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/girl')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            self.girl = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
      this.$axios.get('/api/boy')
        .then((res) => {
          console.log(res)
          res = res.data
          if (res.error === 0) {
            res.boy = res.data
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
</script>

<style lang="less">
  #app {
    .tab-box {
      display: flex;
      position: fixed;
      bottom: 0;
      height: 60px;
      line-height: 60px;
      width: 100%;
      border-top: 1px solid #ccc;
      background-color: lavender;
      z-index: 50;
      .tab-item {
        flex: 1;
        text-align: center;
        & > a {
          display: block;
          font-size: 18px;
          /*color: white;*/
          &.active {
            color: rgb(240,20,20);
          }
        }
      }
    }
  }
</style>
