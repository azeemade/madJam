<template>
    <div>
        <div class="mobile">
            <div class="d-flex justify-content-center py-16">
                <img src="~/assets/images/undraw_happy_music.png" alt="happy music" width="240" height="209">
            </div>
            <actionsheet />
        </div>
        <div class="desktop">
            <heroSection />
        </div>
    </div>
</template>
<script>
import actionsheet from './mobile/landing_actionsheet.vue'
import heroSection from './desktop/heroSection.vue'
export default {
    name: 'Landing',
    components: { actionsheet, heroSection },
}
</script>