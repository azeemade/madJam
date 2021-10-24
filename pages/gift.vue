<template>
    <div>
        <div class="mobile">
            <m-gift />
        </div>
        <div class="desktop mt-24 mr-5">
            <d-gift />
        </div>
    </div>
</template>
<script>
import d_gift from '../components/d_gift.vue'
import M_gift from '../components/m_gift.vue'
export default {
  components: { d_gift, M_gift },
  name: "gift",
}
</script>