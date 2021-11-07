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
    

}
</script>