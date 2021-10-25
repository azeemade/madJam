<template>
    <div>
        <div v-if="$device.isMobile">
            <Nuxt />
        </div>
        <div v-else>
            <div class="d-flex">
                <div :class="'col-md-2'+($route.name === 'index') ? 'd-none':''">
                    <sidebar />
                </div>
                <div :class="($route.name === 'index') ? 'px--5':'col-md-10' ">
                    <navbar-1 />
                    <Nuxt />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar1 from '../components/desktop/Navbar.vue'
import Sidebar from '../components/desktop/sidebar.vue'
export default {
    components: {navbar1, Sidebar}
}
</script>
