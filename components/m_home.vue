<template>
    <div>
        <mobileNavbar />
        <mobilesidebar />
        <div class="px-3 mt-16">
            <div class="">
                <div class="d-flex justify-content-between mb-4">
                    <p class="text-xl text--dark font-medium">Category</p>
                    <nuxt-link to="/categories" class="text--dark text-decoration-underline">
                        view all
                    </nuxt-link>
                </div>
            
                <categorycard />
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-4">
                    <p class="text-xl text--dark font-medium">For you</p>
                </div>
                
                <playlistcard />
            </div>

            <div class="d-flex justify-center my-5">
                <nuxt-link to="/playlists" class="btn bg--dark text--primary btn-lg rounded-pill">
                    View all playlists
                </nuxt-link>
            </div>

            <subscribemodal />
        </div>
    </div>
</template>
<script>
import playlistcard from '../components/mobile/playlistcard.vue'
import categorycard from '../components/utils/categorycard.vue'
import Subscribemodal from './utils/subscribemodal.vue'
import mobileNavbar from '../components/mobile/Navbar.vue'
import mobilesidebar from '../components/mobile/sidebar.vue'
export default {
    name: 'mhome',
    components: { mobilesidebar, mobileNavbar, playlistcard, categorycard, Subscribemodal },
    

}
</script>