<template>
    <div>
        <div class="mobile">
            <MobileBrowse />
        </div>
        <div class="desktop mt-24 mr-5">
            <WebBrowse />
        </div>
    </div>
</template>
<script>
import WebBrowse from '@/components/web/WebBrowse.vue'
import MobileBrowse from '@/components/mobile/MobileBrowse.vue'
export default {
    components: { MobileBrowse, WebBrowse},
    name: "Browse",
    /*metaInfo: {
        title: 'Browse',
        meta: [
        { name: 'description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.'}, 
        { property: 'og:title', content: 'Browse' },
        { property: 'og:url', content: 'https://madjam.netlify.app/browse' },
        { property: 'og:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        { property: 'twitter:title', content: 'Browse' },
        { property: 'twitter:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        ]
    }*/
  
}
</script>