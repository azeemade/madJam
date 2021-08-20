<template>
    <div>
        <div class="mobile">
            <landing />
        </div>
        <div class="desktop">
            This is a desktop device
        </div>
    </div>
</template>
<script>
import Landing from '../components/landing.vue'
export default {
  components: { Landing },
  name: "index",
  //layout: (ctx) => ctx.$device.isMobile ? 'default' : 'desktop'
  layout: window.matchMedia("(min-width: 768px)".matches) ? 'desktop' : 'default',
}
</script>