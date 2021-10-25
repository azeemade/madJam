<template>
    <div>
        <div v-if="$device.isDesktop" v-show="$route.name !== 'index'">
            <sidebar />
        </div>
        <div class="mb-5">   
            <div v-if="$device.isMobile">
                <mobileNavbar />
            </div>
            <div v-else>
                <DesktopNavbar />
            </div>
        </div>
    </div>
</template>
<script>
import DesktopNavbar from '../desktop/Navbar.vue'
import Sidebar from '../desktop/sidebar.vue'
import mobileNavbar from '../mobile/Navbar.vue'
export default {
    name: 'navbar',
  components: { mobileNavbar, DesktopNavbar, Sidebar },
    
}
</script>