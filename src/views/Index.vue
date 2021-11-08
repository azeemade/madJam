<template>
    <div>
        <div class="mobile">
            <div class="d-flex justify-content-center py-16">
                <img src="@/assets/images/undraw_happy_music.png" alt="Listen to carefully curated playlists" width="240" height="209">
            </div>
            <ActionSheet />
        </div>
        <div class="desktop">
            <div class="px-5">
                <HeroSection />
            </div>
        </div>
    </div>
</template>
<script>
import ActionSheet from '@/components/mobile/LandingActionSheet.vue'
import HeroSection from '@/components/web/HeroSection.vue'
export default {
    name: 'Index',
    components: { ActionSheet, HeroSection },
    /*metaInfo: {
        title: 'Playlists by madJam'
    }*/
}
</script>