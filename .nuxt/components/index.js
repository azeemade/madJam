import { wrapFunctional } from './utils'

export { default as Landing } from '../..\\components\\landing.vue'
export { default as Logo } from '../..\\components\\logo.vue'
export { default as MHome } from '../..\\components\\m_home.vue'
export { default as DesktopNavbar } from '../..\\components\\desktop\\Navbar.vue'
export { default as MobileLandingActionsheet } from '../..\\components\\mobile\\landing_actionsheet.vue'
export { default as MobileNavbar } from '../..\\components\\mobile\\Navbar.vue'
export { default as MobilePlaylistcard } from '../..\\components\\mobile\\playlistcard.vue'
export { default as MobilePlaylistcardcol } from '../..\\components\\mobile\\playlistcardcol.vue'
export { default as UtilsBackbutton } from '../..\\components\\utils\\backbutton.vue'
export { default as UtilsCategorycard } from '../..\\components\\utils\\categorycard.vue'
export { default as UtilsCategorycardcol } from '../..\\components\\utils\\categorycardcol.vue'
export { default as UtilsSearchbar } from '../..\\components\\utils\\searchbar.vue'
export { default as UtilsSubscribemodal } from '../..\\components\\utils\\subscribemodal.vue'

export const LazyLanding = import('../..\\components\\landing.vue' /* webpackChunkName: "components/landing" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMHome = import('../..\\components\\m_home.vue' /* webpackChunkName: "components/m-home" */).then(c => wrapFunctional(c.default || c))
export const LazyDesktopNavbar = import('../..\\components\\desktop\\Navbar.vue' /* webpackChunkName: "components/desktop-navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyMobileLandingActionsheet = import('../..\\components\\mobile\\landing_actionsheet.vue' /* webpackChunkName: "components/mobile-landing-actionsheet" */).then(c => wrapFunctional(c.default || c))
export const LazyMobileNavbar = import('../..\\components\\mobile\\Navbar.vue' /* webpackChunkName: "components/mobile-navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyMobilePlaylistcard = import('../..\\components\\mobile\\playlistcard.vue' /* webpackChunkName: "components/mobile-playlistcard" */).then(c => wrapFunctional(c.default || c))
export const LazyMobilePlaylistcardcol = import('../..\\components\\mobile\\playlistcardcol.vue' /* webpackChunkName: "components/mobile-playlistcardcol" */).then(c => wrapFunctional(c.default || c))
export const LazyUtilsBackbutton = import('../..\\components\\utils\\backbutton.vue' /* webpackChunkName: "components/utils-backbutton" */).then(c => wrapFunctional(c.default || c))
export const LazyUtilsCategorycard = import('../..\\components\\utils\\categorycard.vue' /* webpackChunkName: "components/utils-categorycard" */).then(c => wrapFunctional(c.default || c))
export const LazyUtilsCategorycardcol = import('../..\\components\\utils\\categorycardcol.vue' /* webpackChunkName: "components/utils-categorycardcol" */).then(c => wrapFunctional(c.default || c))
export const LazyUtilsSearchbar = import('../..\\components\\utils\\searchbar.vue' /* webpackChunkName: "components/utils-searchbar" */).then(c => wrapFunctional(c.default || c))
export const LazyUtilsSubscribemodal = import('../..\\components\\utils\\subscribemodal.vue' /* webpackChunkName: "components/utils-subscribemodal" */).then(c => wrapFunctional(c.default || c))
