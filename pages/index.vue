<template>
    <div>
        <div>
            <landing />
        </div>
    </div>
</template>
<script>
import Landing from '../components/landing.vue'
import Navbar from '../components/utils/Navbar.vue'
export default {
  components: { Landing, Navbar },
  name: "index",
}
</script>