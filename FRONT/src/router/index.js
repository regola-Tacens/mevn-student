import { createRouter, createWebHistory } from 'vue-router'
import CreateComponent from '../views/CreateComponent.vue'
import ListComponent from '../views/ListComponent.vue'
import EditComponent from '../views/EditComponent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CreateComponent
  },
  {
    path: '/view',
    name: 'view',
    component: ListComponent
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditComponent
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
