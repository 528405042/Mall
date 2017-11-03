<template>
  <div class="boy_mall">
    <!--<Shop></Shop>-->
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in boy.banners" :key="item.id" @mouseenter.native="stopPlay"
                      @mouseleave.native="play">
          <img class="swiper_image" :src="item.bannerImg"/>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </div>
    <div class="like">
      <div class="head">
        <div class="icon"><img :src="boy.brands.icon"></div>
        <div class="title">{{boy.brands.title}}</div>
      </div>
      <div class="content-list">
        <ul>
          <li v-for="item in boy.brands.items" v-if="item.imgUrl">
            <img :src="item.imgUrl"/>
          </li>
          <li>{{this.boy.brands.items[7].brandName}}</li>
        </ul>
      </div>
    </div>
    <div class="list-show" v-for="item in boy.templates">
      <div class="left">
        <img :src="item.image"/>
      </div>
      <div class="right">
        <ul>
          <li  v-for="items in item.item">
            <img :src="items.imgUrl">
          </li>
        </ul>
      </div>
    </div>
    <div class="downBrands">
      <div class="head">
        <div class="icon"><img :src="boy.downBrands.icon"></div>
        <div class="title">{{boy.downBrands.title}}</div>
      </div>
      <div class="content-list">
        <ul>
          <li v-for="item in boy.downBrands.items" v-if="item.imgUrl">
            <img :src="item.imgUrl"/>
          </li>
          <li>{{boy.brands.items[7].brandName}}</li>
        </ul>
      </div>
    </div>
    <div class="goods_commend">
      <div class="header">
        <img  :src="boy.goods.icon">
        <span class="title">{{boy.goods.title}}</span>
      </div>
      <div class="goods">
        <div class="goods_list" v-for="item in boy.goods.items">
          <div class="goods_image">
            <img :src="item.img320url" />
          </div>
          <div class="description">
            <span class="crazyPrice">￥{{item.crazyPrice}}</span>
            <span class="shopPrice">￥{{item.shopPrice}}</span>
            <span class="discount">{{item.discount}}折</span>
          </div>
          <div class="goodsName">{{item.goodsName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //  import Shop from '../Shop'
  import Swiper from '../../../node_modules/vue-awesome-swiper/src/swiper.vue'
  import SwiperSlide from '../../../node_modules/vue-awesome-swiper/src/slide.vue'
  //  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    props: {
      boy: {
        type: Object
      }
    },
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 2000,
          loop: true,
          autoplayDisableOnInteraction: true,
          direction: 'horizontal',
          effect: 'slide',
          grabCursor: true,
          setWrapperSize: true,
          paginationType: 'bullets',
          paginationClickable: true,
          pagination: '.swiper-pagination',
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          mousewheelControl: true,
          observeParents: true
//          onTransitionStart (swiper) {
//            console.log(swiper)
//          }
        }
      }
    },
//    created () {
//    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    methods: {
      stopPlay () {
        this.mySwiper.stopPlay()
      },
      play () {
        this.mySwiper.startAutoplay()
      }
    },
    components: {
      SwiperSlide,
      Swiper
//      Shop
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../node_modules/swiper/dist/css/swiper.min.css";

  .boy_mall {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 60px;
    background-color: #f0eff4;
    .banner {
      position: relative;
      .swiper_image {
        width: 100%;
      }
    }
    .like {
      position: relative;
      top: 5px;
      height: 200px;
      width: 100%;
      background-color: white;
      .head {
        position: absolute;
        display: inline-block;
        top: 5px;
        line-height: 30px;
        width: 100%;
        text-align: center;
        .icon {
          position: absolute;
          left: 43%;
          top: 3px;
          img{
            width: 17px;
            height: 17px;
          }
        }
        .title {
          position: absolute;
          color: #939393;
          left: 49%;
          font-size: 13px;
        }
      }
      .content-list {
        position: relative;
        top: 35px;
        height: 170px;
        width: 100%;
        padding-top: 5px;
        display: table;
        /*border: 1px solid #ccc;*/
        ul{
          position: absolute;
          height: 100%;
          width: 100%;
          li{
            display: inline-block;
            width: 24%;
            height: 40%;
            padding-top: 5px;
            border-left: 1px solid #f0eff4;
            border-top: 1px solid #f0eff4 ;
            text-align: center;
            vertical-align: middle;
            img{
              width: 60px;
              height: 50px;
            }
          }
          li:last-child{
            position: absolute;
            font-size: 18px;
            color: orange;
            text-decoration:underline;
            padding-top: 25px;
          }
        }
      }
    }
    .list-show {
      position: relative;
      height: 220px;
      width: 100%;
      /*border-top: 20px solid #ccc;*/
      background-color: #f0eff4;
      .left {
        position: absolute;
        width: 35%;
        height: 100%;
        img {
          position: absolute;
          height: 220px;
          width: 100%;
        }
      }
      .right {
        position: absolute;
        top: 0.5%;
        width: 65%;
        height: 100%;
        left: 35%;
        ul{
          position: absolute;
          height: 100%;
          width: 100%;
          li{
            display: inline-block;
            float: left;
            border-right: 1px solid #fff;
            width: 49%;
            height: 50%;
            img{
              height: 100%;
              width: 100%;
            }
          }
        }

      }
    }
    .downBrands {
      position: relative;
      top: 10px;
      height: 200px;
      width: 100%;
      background-color: white;
      .head {
        position: absolute;
        display: inline-block;
        top: 5px;
        line-height: 30px;
        width: 100%;
        text-align: center;
        .icon {
          position: absolute;
          left: 36%;
          top: 3px;
          img{
            width: 17px;
            height: 17px;
          }
        }
        .title {
          position: absolute;
          color: #939393;
          left: 41%;
          font-size: 13px;
        }
      }
      .content-list {
        position: relative;
        top: 35px;
        height: 170px;
        width: 100%;
        padding-top: 5px;
        display: table;
        /*border: 1px solid #ccc;*/
        ul{
          position: absolute;
          height: 100%;
          width: 100%;
          li{
            display: inline-block;
            width: 24%;
            height: 40%;
            padding-top: 5px;
            border-left: 1px solid #f0eff4;
            border-top: 1px solid #f0eff4 ;
            text-align: center;
            vertical-align: middle;
            img{
              width: 60px;
              height: 50px;
            }
          }
          li:last-child{
            position: absolute;
            font-size: 18px;
            color: orange;
            text-decoration:underline;
            padding-top: 25px;
          }
        }
      }
    }
    .goods_commend {
      position: relative;
      width: 100%;
      margin-bottom: 60px;
      .header{
        height: 40px;
        margin-top: 25px;
        text-align: center;
        img{
          width: 20px;
          height: 20px;
          vertical-align: middle;
        }
        .title{
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
        }
      }
      .goods{
        position: absolute;
        background-color: #f0eff4 ;
        width: 100%;
        .goods_list{
          display: inline-block;
          margin-left: 4px;
          box-sizing: border-box;
          width: 48%;
          height: 250px;
          padding: 5px;
          background-color: white;
          .goods_image{
            width: 100%;
            height:70%;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .description{
            width: 100%;
            height: 15%;
            margin-top: 10px;
            .crazyPrice{
              /*width: 30%;*/
              height: 100%;
              float: left;
              text-align: center;
              vertical-align: bottom;
              font-size: 18px;
            }
            .shopPrice {
              display: inline-block;
              /*width: 30%;*/
              height: 100%;
              margin-top: 6px;
              margin-left: 5px;
              font-size: 10px;
              text-decoration: line-through;
              color: #7e8c8d;
            }
            .discount {
              display: inline-block;
              margin-top: 6px;
              margin-right: 5px;
              float: right;
              font-size: 10px;
            }
          }
          .goodsName{
            margin: 5px 3px;
            height: 10%;
            width: 100%;
            font-size: 15px;
            color: #7e8c8d;
            box-sizing: border-box;
            padding-right: 3px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow:hidden;
          }
        }
      }
    }
  }
</style>
