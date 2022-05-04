import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Me = () => import('views/me/Me')

Vue.use(VueRouter)
const routes = [
  {
    // 指定一进入页面跳转到home页
    path: '',
    redirect: '/home'
  },
  // 对页面跳转的控制
  {
    path: '/home',
    // 指定的组件
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/me',
    component: Me
  }
]
const router = new VueRouter({
  routes,
  // url模式
  mode: 'history'
})

export default router
