import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Leaders from '../views/leaders.vue'
import Login from '../components/login.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/leaders', component: Leaders },
  { path: '/login', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router