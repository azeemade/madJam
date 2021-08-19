<template>
    <div>
        <div v-if="$device.isMobile">
            <landing />
        </div>
        <div v-else>
            This is a desktop device
        </div>
    </div>
</template>
<script>
import Landing from '../components/landing.vue'
export default {
  components: { Landing },
  name: "index",
  layout: (ctx) => ctx.$device.isMobile ? 'default' : 'desktop'
}
</script>