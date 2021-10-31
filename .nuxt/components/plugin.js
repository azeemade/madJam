import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  DBrowse: () => import('../..\\components\\d_browse.vue' /* webpackChunkName: "components/d-browse" */).then(c => wrapFunctional(c.default || c)),
  DGift: () => import('../..\\components\\d_gift.vue' /* webpackChunkName: "components/d-gift" */).then(c => wrapFunctional(c.default || c)),
  DHome: () => import('../..\\components\\d_home.vue' /* webpackChunkName: "components/d-home" */).then(c => wrapFunctional(c.default || c)),
  ImageUpload: () => import('../..\\components\\image-upload.vue' /* webpackChunkName: "components/image-upload" */).then(c => wrapFunctional(c.default || c)),
  Landing: () => import('../..\\components\\landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  MBrowse: () => import('../..\\components\\m_browse.vue' /* webpackChunkName: "components/m-browse" */).then(c => wrapFunctional(c.default || c)),
  MGift: () => import('../..\\components\\m_gift.vue' /* webpackChunkName: "components/m-gift" */).then(c => wrapFunctional(c.default || c)),
  MGift2: () => import('../..\\components\\m_gift_2.vue' /* webpackChunkName: "components/m-gift2" */).then(c => wrapFunctional(c.default || c)),
  MHome: () => import('../..\\components\\m_home.vue' /* webpackChunkName: "components/m-home" */).then(c => wrapFunctional(c.default || c)),
  DesktopContribute: () => import('../..\\components\\desktop\\contribute.vue' /* webpackChunkName: "components/desktop-contribute" */).then(c => wrapFunctional(c.default || c)),
  DesktopHeroSection: () => import('../..\\components\\desktop\\heroSection.vue' /* webpackChunkName: "components/desktop-hero-section" */).then(c => wrapFunctional(c.default || c)),
  DesktopNavbar: () => import('../..\\components\\desktop\\Navbar.vue' /* webpackChunkName: "components/desktop-navbar" */).then(c => wrapFunctional(c.default || c)),
  DesktopSidebar: () => import('../..\\components\\desktop\\sidebar.vue' /* webpackChunkName: "components/desktop-sidebar" */).then(c => wrapFunctional(c.default || c)),
  DesktopSubscribe: () => import('../..\\components\\desktop\\subscribe.vue' /* webpackChunkName: "components/desktop-subscribe" */).then(c => wrapFunctional(c.default || c)),
  MobileLandingActionsheet: () => import('../..\\components\\mobile\\landing_actionsheet.vue' /* webpackChunkName: "components/mobile-landing-actionsheet" */).then(c => wrapFunctional(c.default || c)),
  MobileNavbar: () => import('../..\\components\\mobile\\Navbar.vue' /* webpackChunkName: "components/mobile-navbar" */).then(c => wrapFunctional(c.default || c)),
  MobilePlaylistcard: () => import('../..\\components\\mobile\\playlistcard.vue' /* webpackChunkName: "components/mobile-playlistcard" */).then(c => wrapFunctional(c.default || c)),
  MobilePlaylistcardcol: () => import('../..\\components\\mobile\\playlistcardcol.vue' /* webpackChunkName: "components/mobile-playlistcardcol" */).then(c => wrapFunctional(c.default || c)),
  MobileSidebar: () => import('../..\\components\\mobile\\sidebar.vue' /* webpackChunkName: "components/mobile-sidebar" */).then(c => wrapFunctional(c.default || c)),
  UtilsBackbutton: () => import('../..\\components\\utils\\backbutton.vue' /* webpackChunkName: "components/utils-backbutton" */).then(c => wrapFunctional(c.default || c)),
  UtilsCategorycard: () => import('../..\\components\\utils\\categorycard.vue' /* webpackChunkName: "components/utils-categorycard" */).then(c => wrapFunctional(c.default || c)),
  UtilsCategorycardcol: () => import('../..\\components\\utils\\categorycardcol.vue' /* webpackChunkName: "components/utils-categorycardcol" */).then(c => wrapFunctional(c.default || c)),
  UtilsNavbar: () => import('../..\\components\\utils\\Navbar.vue' /* webpackChunkName: "components/utils-navbar" */).then(c => wrapFunctional(c.default || c)),
  UtilsSearchbar: () => import('../..\\components\\utils\\searchbar.vue' /* webpackChunkName: "components/utils-searchbar" */).then(c => wrapFunctional(c.default || c)),
  UtilsSubscribemodal: () => import('../..\\components\\utils\\subscribemodal.vue' /* webpackChunkName: "components/utils-subscribemodal" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
