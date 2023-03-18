import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../students/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../students/AboutView.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../students/Courses.vue')
    },
    {
      path: '/studentslist',
      name: 'studentslist',
      component: () => import('../students/StudentsList.vue')
    },
    {
      path: '/addstudent',
      name: 'addstudent',
      component: () => import('../students/AddStudent.vue')
    },
    {
      path: '/students/:id/edit',
      name: 'edit',
      component: () => import('../students/Edit.vue')
    },
  ]
})

export default router
