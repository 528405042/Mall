import Vue from 'vue'
import Router from 'vue-router'
import Mall from '@/components/main/Mall'
import Girl from '@/components/main/Girl'
import Boy from '@/components/main/Boy'
import DownBrands from '@/components/DownBrands'
import Shop from '@/components/Shop'
import ShopCart from '@/components/ShopCart'
import Myself from '@/components/Myself'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/mall', name: 'Mall', component: Mall},
    {path: '/downBrands', name: 'DownBrands', component: DownBrands},
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      children: [
      {path: '/mall', name: 'Mall', component: Mall},
      {path: '/girl', name: 'Girl', component: Girl},
      {path: '/boy', name: 'Boy', component: Boy}
      ]},
    {path: '/shopcart', name: 'ShopCart', component: ShopCart},
    {path: '/myself', name: 'Myself', component: Myself}
  ]
})
