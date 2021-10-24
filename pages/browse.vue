<template>
    <div>
        <div class="mobile">
            <m-browse />
        </div>
        <div class="desktop mt-24 mr-5">
            <d-browse />
        </div>
    </div>
</template>
<script>
import D_browse from '../components/d_browse.vue'
import M_browse from '../components/m_browse.vue'
export default {
  components: { M_browse, D_browse},
  name: "browse",
}
</script>