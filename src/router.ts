import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from './views/Home.vue'
import { defineAsyncComponent } from 'vue'

const Post = defineAsyncComponent({
  loader: () => import('./views/Post.vue'),
  delay: 10,
  timeout: 5000,
})

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/post/:slug', name: 'Post', component: Post },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return { top: 0 }
  },
})
