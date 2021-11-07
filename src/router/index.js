import { createRouter, createWebHashHistory } from 'vue-router'
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
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/playlists',
    name: 'Playlists',
    component: Playlists
  },
  {
    path: '/playlists/:id', 
    name: 'Playlist',
    component: Playlist
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/categories/:_cid', 
    name: 'Category',
    component: Category
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
    component: Contribute
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
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