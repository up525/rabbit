// 路由配置
// createRouter 创建路由
// createWebHistory 创建路由历史
// routes 路由配置
// path 路径
// name 路由名称
// component 路由组件
// redirect 重定向  
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import Login from '../views/Login/index.vue'
import Category from '../views/Category/index.vue'
import Home from '../views/Home/index.vue'  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Layout,
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    }
  ],
})

export default router
