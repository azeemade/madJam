<template>
    <div>
        <div class="desktop" v-show="$route.name !== 'Index'">
            <sidebar />
        </div>
        <div class="mb-5">   
            <div class="mobile">
                <MobileNavbar />
            </div>
            <div class="desktop">
                <WebNavbar />
            </div>
        </div>
    </div>
</template>
<script>
import WebNavbar from '@/components/web/Navbar.vue'
import Sidebar from '@/components/web/Sidebar.vue'
import MobileNavbar from '@/components/mobile/Navbar.vue'
export default {
    name: 'Navbar',
    components: { MobileNavbar, WebNavbar, Sidebar },
    
}
</script>