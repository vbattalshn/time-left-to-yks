import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/404',
    name: '404',
    component: () => import("../views/404")
  },
  {
    path: '/:name',
    name: 'dynamic',
    component: () => import("../views/Dynamic")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
