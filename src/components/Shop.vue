<template>
  <div id="shop">
    <div class="tab-box">
      <div class="tab-item">
        <router-link to="/mall">
          全部
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/girl">
          女生
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/boy">
          男生
        </router-link>
      </div>
      <div class="tab-item">
        <img src="../common/icon/search.png" style="height: 33px; height:33px;padding-top: 12px;">
      </div>
    </div>
    <router-view :mall="mall" :girl="girl" :boy="boy"></router-view>
    <!--<Mall></Mall>-->
  </div>
</template>

<script>
//  import Mall from './main/Mall'
  export default {
    props: {
      mall: {
        type: Object
      },
      boy: {
        type: Object
      },
      girl: {
        type: Object
      }
    }
//    component: {
//      Mall
//    }
  }
</script>

<style lang="less" scoped>
  #shop {
    .tab-box {
      position: fixed;
      display: flex;
      top: 0;
      height: 60px;
      line-height: 60px;
      width: 100%;
      background-color: lavender;
      /*border-bottom: 1px solid #ccc;*/
      .tab-item {
        flex: 1;
        text-align: center;
        & > a {
          display: block;
          font-size: 18px;
          &.active {
            color: rgb(240, 20, 20);
          }
        }
      }
    }
  }
</style>
