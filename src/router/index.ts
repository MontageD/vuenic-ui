import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Demo from '../App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    }
  ]
})

export default router 