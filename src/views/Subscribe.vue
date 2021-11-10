<template>
    <div>
        <MobileNavbar />
        <MobileSidebar />
        <div class="mx-4 mt-16">
            <div class="mb-4">
                <p class="font-semibold text-3xl text--dark mb-3">Join our subscribers list</p>
                <p class="">
                    Be the first to know about our new playlists and 
                    latest additions to our existing playlists for free.
                </p>
            </div>
            <div class="input-group has-icon">
                <span class="form-control-feedback">
                    <i class="bi bi-envelope text--dark-50"></i>
                </span>
                <input type="text" placeholder="Enter your email address" 
                class="form-control searchbar" aria-label="Email address">
            </div>
            <button class="mt-3 text--light bg--dark btn-lg w-100">
                Join
            </button>
        </div>
    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
import MobileNavbar from '@/components/mobile/Navbar.vue'
import MobileSidebar from '@/components/mobile/Sidebar.vue'
import BackButton from '@/components/utils/BackButton.vue';
export default {
    name: 'Subscribe',
    components: { MobileSidebar, MobileNavbar, BackButton},
    data(){
        return{
        }
    },
    methods:{
        getCategory(){
        }
    },
    computed:{
    },
    beforeMount(){
    }
}
</script>
<style scoped>
</style>