import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";


const router = createRouter({
  history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    { path: '/about', component: () => import('../components/About/About.vue') },
    { path: '/project', component: () => import('../components/Project/Project.vue') }
  ]
})

export default router