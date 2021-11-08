<template>
    <div>
        <div class="mobile">
            <MobileHome />
        </div>
        <div class="desktop">
            <div class="mt-24 mr-5">
                <WebHome />
            </div>
        </div>
    </div>
</template>
<script>
import WebHome from '@/components/web/WebHome.vue'
import MobileHome from '@/components/mobile/MobileHome.vue'
export default {
    components: { MobileHome, WebHome},
    name: "Home",
    /*metaInfo: {
        title: 'Home',
        meta: [
        { name: 'description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.'}, 
        { property: 'og:title', content: 'Home' },
        { property: 'og:url', content: 'https://madjam.netlify.app/home' },
        { property: 'og:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        { property: 'twitter:title', content: 'Home' },
        { property: 'twitter:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
      ]
    }*/
    

}
</script>