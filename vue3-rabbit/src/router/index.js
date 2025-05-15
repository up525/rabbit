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
      component: Layout,
      children: [//配置二级路由
        {
          path: '',//小技巧,二级路由的path配置为空,在访问一级路由时,会自动渲染二级路由  
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
})

export default router
