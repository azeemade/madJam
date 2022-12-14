import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import GiftView from '../views/GiftView.vue'
import PlaylistsView from '../views/PlaylistsView.vue'
import AlternativeView from '../views/AlternativeView.vue'
import MonthlyView from '../views/MonthlyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: PlaylistsView,
      children: [
        {
          path: '',
          name: 'all-playlists',
          component: PlaylistsView
        },
        {
          path: 'monthly',
          component: MonthlyView
        },
        {
          path: 'alternative',
          component: AlternativeView
        }
      ]
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesView
    },
    {
      path: '/request-playlist',
      name: 'request-playlist',
      component: GiftView
    }
  ]
})

export default router
