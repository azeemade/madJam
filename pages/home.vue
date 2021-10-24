<template>
    <div>
        <div v-if="$device.isMobile">
            <m-home />
        </div>
        <div v-else>
            <div class="mt-24 mr-5">
                <d-home />
            </div>
        </div>
    </div>
</template>
<script>
import D_home from '../components/d_home.vue'
import M_home from '../components/m_home.vue'
export default {
  components: { M_home, D_home},
  name: "home",
  layout: (ctx) => ctx.$device.isMobile ? 'mobile' : 'default'
}
</script>