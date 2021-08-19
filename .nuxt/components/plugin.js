import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Landing: () => import('../..\\components\\landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  MHome: () => import('../..\\components\\m_home.vue' /* webpackChunkName: "components/m-home" */).then(c => wrapFunctional(c.default || c)),
  DesktopNavbar: () => import('../..\\components\\desktop\\Navbar.vue' /* webpackChunkName: "components/desktop-navbar" */).then(c => wrapFunctional(c.default || c)),
  MobileLandingActionsheet: () => import('../..\\components\\mobile\\landing_actionsheet.vue' /* webpackChunkName: "components/mobile-landing-actionsheet" */).then(c => wrapFunctional(c.default || c)),
  MobileNavbar: () => import('../..\\components\\mobile\\Navbar.vue' /* webpackChunkName: "components/mobile-navbar" */).then(c => wrapFunctional(c.default || c)),
  MobilePlaylistcard: () => import('../..\\components\\mobile\\playlistcard.vue' /* webpackChunkName: "components/mobile-playlistcard" */).then(c => wrapFunctional(c.default || c)),
  MobilePlaylistcardcol: () => import('../..\\components\\mobile\\playlistcardcol.vue' /* webpackChunkName: "components/mobile-playlistcardcol" */).then(c => wrapFunctional(c.default || c)),
  UtilsBackbutton: () => import('../..\\components\\utils\\backbutton.vue' /* webpackChunkName: "components/utils-backbutton" */).then(c => wrapFunctional(c.default || c)),
  UtilsCategorycard: () => import('../..\\components\\utils\\categorycard.vue' /* webpackChunkName: "components/utils-categorycard" */).then(c => wrapFunctional(c.default || c)),
  UtilsCategorycardcol: () => import('../..\\components\\utils\\categorycardcol.vue' /* webpackChunkName: "components/utils-categorycardcol" */).then(c => wrapFunctional(c.default || c)),
  UtilsSearchbar: () => import('../..\\components\\utils\\searchbar.vue' /* webpackChunkName: "components/utils-searchbar" */).then(c => wrapFunctional(c.default || c)),
  UtilsSubscribemodal: () => import('../..\\components\\utils\\subscribemodal.vue' /* webpackChunkName: "components/utils-subscribemodal" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
