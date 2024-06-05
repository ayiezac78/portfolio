import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/posts/:slug', component: () => import('../views/BlogPosts.vue') },
  { path: '/projects', component: () => import('../views/RepoData.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router