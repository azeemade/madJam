<template>
    <div>
        <div v-if="$device.isMobile">
            <m-home />
        </div>
        <div v-else>
            This is a desktop device
        </div>
    </div>
</template>
<script>
import M_home from '../components/m_home.vue'
export default {
  components: { M_home },
  name: "home",
  layout: (ctx) => ctx.$device.isMobile ? 'default' : 'desktop'
}
</script>