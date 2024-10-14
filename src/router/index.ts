// router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue' // Asegúrate de que la ruta sea correcta
import TasksPage from '../views/TasksPage.vue' // Asegúrate de que la ruta sea correcta

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksPage,
  },
  // Agrega aquí otras rutas si es necesario
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
