<template>
    <div>
        <navbar />
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
}
</script>