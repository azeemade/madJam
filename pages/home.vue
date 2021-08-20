<template>
    <div>
        <div class="mobile">
            <m-home />
        </div>
        <div class="desktop">
            This is a desktop device
        </div>
    </div>
</template>
<script>
import M_home from '../components/m_home.vue'
export default {
  components: { M_home },
  name: "home",
  //layout: (ctx) => ctx.$device.isMobile ? 'default' : 'desktop'
  layout: window.matchMedia("(min-width: 768px)".matches) ? 'desktop' : 'default',
}
</script>