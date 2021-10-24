<template>
    <div>
        <div class="desktop" v-show="$route.name !== 'index'">
            <sidebar />
        </div>
        <div class="mb-5">   
            <div class="mobile">
                <navbar />
            </div>
            <div class="desktop">
                <DesktopNavbar />
            </div>
        </div>
    </div>
</template>
<script>
import DesktopNavbar from '../desktop/Navbar.vue'
import Sidebar from '../desktop/sidebar.vue'
import Navbar from '../mobile/Navbar.vue'
export default {
    name: 'navbar',
  components: { Navbar, DesktopNavbar, Sidebar },
    
}
</script>