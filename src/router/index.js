import { createRouter, createWebHistory } from 'vue-router'



const routes = [
  {
    name: 'Login',
    path: '/',
    alias: '/login',
    component: () => import('@/pages/Login.vue'),
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('@/pages/Register.vue'),
  },
  {
    name: 'Projects',
    path: '/projects',
    component: () => import('@/pages/Projects.vue'),
  },
  {
    name: 'Board',
    path: '/board',
    component: () => import('@/pages/Board.vue'),
  },
  {
    name: 'Task',
    path: '/task',
    component: () => import('@/pages/Task.vue'),
  },
  {
    name: 'Workspaces',
    path: '/workspaces',
    component: () => import('@/pages/Workspaces.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router