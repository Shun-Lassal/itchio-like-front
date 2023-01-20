import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import JorisPage from './components/pages/JorisPage.vue'
import ShunPage from './components/pages/ShunPage.vue'
import ThomasPage from './components/pages/ThomasPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/joris', name: 'joris', component: JorisPage },
  { path: '/shun', name: 'shun', component: ShunPage },
  { path: '/thomas', name: 'thomas', component: ThomasPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router