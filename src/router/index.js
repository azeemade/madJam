import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Playlists from '../views/Playlists.vue'
import Categories from '../views/Categories.vue'
import Search from '../views/Search.vue'
import Gift from '../views/Gift.vue'
import Subscribe from '../views/Subscribe.vue'
import Contribute from '../views/Contribute.vue'

import Playlist from '../views/children/Playlist.vue'
import Category from '../views/children/Category.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse,
    meta: { requiresAuth: true }
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: Playlists,
    meta: { requiresAuth: true }
  },
  {
    path: '/playlists/:id', 
    name: 'Playlist',
    component: Playlist,
    meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    props: route => ({ query: route.query.q}),
    meta: { requiresAuth: true }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: { requiresAuth: true }
  },
  {
    path: '/categories/:id', 
    name: 'Category',
    component: Category,
    meta: { requiresAuth: true }
  },
  {
    path: '/gift',
    name: 'Gift',
    component: Gift
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: Subscribe
  },
  
  {
    path: '/contribute',
    name: 'Contribute',
    component: Contribute,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
      if (localStorage.getItem('username') == null){
          next({
              path:'/',
              query: { redirect: to.fullPath }
          })
      }
      else{
        next()
      }
  }
  else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router