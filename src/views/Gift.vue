<template>
    <div>
        <div class="mobile">
            <MobileGift />
        </div>
        <div class="desktop mt-24 mr-5">
            <WebGift />
        </div>
    </div>
</template>
<script>
import WebGift from '@/components/web/WebGift.vue'
import MobileGift from '@/components/mobile/MobileGift.vue'
export default {
  components: { WebGift, MobileGift },
  name: "Gift",
}
</script>