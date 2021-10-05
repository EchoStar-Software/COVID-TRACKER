import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import USA from '../views/USA.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usa',
    name: 'USA',
    component: USA
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
