<template>
  <div class="mobile">
    <router-view />
  </div>
  <div class="desktop">
    <div class="d-flex">
        <div :class="'col-md-2'+($route.name === 'Index') ? 'd-none':''">
            <WebSidebar />
        </div>
        <div :class="($route.name === 'Index') ? 'px--5':'col-md-10' ">
            <WebNavbar />
            <router-view/>
        </div>
    </div>
  </div>
</template>
<script>
import WebNavbar from '@/components/web/Navbar.vue'
import WebSidebar from '@/components/web/Sidebar.vue'
export default {
    components: {WebNavbar, WebSidebar}
}
</script>