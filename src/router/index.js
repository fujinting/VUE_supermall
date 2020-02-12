import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

//1. 安装插件
Vue.use(VueRouter)

//2. 创建路由对象
const routes=[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
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
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail/:iid',
    component: Detail
  }
]

const router=new VueRouter({
  routes,
  mode:"history"
})

export default router
//不只是把地址和对应网页导出到main.js
//还把网页导出给APP.vue,APP.vue不需要导入，默认接收
