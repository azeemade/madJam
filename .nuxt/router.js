import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01dfd54a = () => interopDefault(import('..\\pages\\browse.vue' /* webpackChunkName: "pages/browse" */))
const _d312f048 = () => interopDefault(import('..\\pages\\categories.vue' /* webpackChunkName: "pages/categories" */))
const _5d91dbde = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _1b420220 = () => interopDefault(import('..\\pages\\gift.vue' /* webpackChunkName: "pages/gift" */))
const _ba77c9c2 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _e0445e5e = () => interopDefault(import('..\\pages\\playlists.vue' /* webpackChunkName: "pages/playlists" */))
const _11698549 = () => interopDefault(import('..\\pages\\playlists\\_slug.vue' /* webpackChunkName: "pages/playlists/_slug" */))
const _3d585530 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _1b6f1a1a = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _e2a52a34 = () => interopDefault(import('..\\pages\\search\\category.vue' /* webpackChunkName: "pages/search/category" */))
const _d04ab48c = () => interopDefault(import('..\\pages\\search\\playlist.vue' /* webpackChunkName: "pages/search/playlist" */))
const _09fc8c42 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/browse",
    component: _01dfd54a,
    name: "browse"
  }, {
    path: "/categories",
    component: _d312f048,
    name: "categories",
    children: [{
      path: ":slug?",
      component: _5d91dbde,
      name: "categories-slug"
    }]
  }, {
    path: "/gift",
    component: _1b420220,
    name: "gift"
  }, {
    path: "/home",
    component: _ba77c9c2,
    name: "home"
  }, {
    path: "/playlists",
    component: _e0445e5e,
    name: "playlists",
    children: [{
      path: ":slug?",
      component: _11698549,
      name: "playlists-slug"
    }]
  }, {
    path: "/search",
    component: _3d585530,
    children: [{
      path: "",
      component: _1b6f1a1a,
      name: "search"
    }, {
      path: "category",
      component: _e2a52a34,
      name: "search-category"
    }, {
      path: "playlist",
      component: _d04ab48c,
      name: "search-playlist"
    }]
  }, {
    path: "/",
    component: _09fc8c42,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
