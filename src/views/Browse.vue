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
}
</script>