<template>
  <div class="mobile">
    <router-view />
  </div>
  <div class="desktop">
    <div class="d-flex">
        <div :class="'col-md-2'+($route.name === 'Index') ? 'd-none':''">
            <WebSidebar />
        </div>
        <div :class="($route.name === 'Index') ? 'px--5':'col-md-10' ">
            <WebNavbar />
            <router-view/>
        </div>
    </div>
  </div>
</template>
<script>
import WebNavbar from '@/components/web/Navbar.vue'
import WebSidebar from '@/components/web/Sidebar.vue'
export default {
    components: {WebNavbar, WebSidebar},
    /*metaInfo: {
      title: 'Playlists by madJam',
      titleTemplate: '%s - madJam',
      htmlAttrs: {
        lang: 'en-GB'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: 'Listen to carefully curated playlists. Browse a wide range of playlist created specially for your delight. Available on Apple music, Spotify and Youtube music.'},
        { name: 'keywords', content: 'playlist, apple music, spotify, deezer, youtube, youtube music, listen, curate' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Playlists by madJam' },
        { property: 'og:image', content: '@/assets/images/madJam.png' },
        { property: 'og:url', content: 'https://madjam.netlify.app' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:description', content: 'Listen to carefully curated playlists. Browse a wide range of playlist created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        { property: 'twitter:title', content: 'Playlists by madJam' },
        { property: 'twitter:image:src', content: '@/assets/images/madJam.png' },
        { property: 'twitter:creator', content: '@azeemade' },
        { property: 'twitter:site', content: '@madJamng' },
        { property: 'twitter:description', content: 'Listen to carefully curated playlists. Browse a wide range of playlist created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
      ]
  },*/
}
</script>