<template>
    <nav class="fixed-top d-flex justify-content-between align-items-center bg--light">
        <div class="pt-2">
            <button class="btn" @click="OpenSideNav">
                <i class="bi bi-justify-left"></i>
            </button>
        </div>
        <div class="d-flex justify-content-center">
            <img src="@/assets/images/madjam.png" alt="madJam logo" width="32" height="22">
        </div>
        <div></div>
    </nav>
</template>
<script>
import MobileSidebar from '@/components/mobile/Sidebar.vue'
export default {
    components: { MobileSidebar },
    name: 'MobileNavbar',
    methods:{
        OpenSideNav(){
            var boolval = true
            this.$store.commit('OpenSideNav', boolval);
        }
    }
}
</script>