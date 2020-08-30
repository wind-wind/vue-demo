import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('views/home/Home.vue')
const Detail = () => import('views/detail/Detail.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue') 

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
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
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router