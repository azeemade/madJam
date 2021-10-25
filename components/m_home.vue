<template>
    <div>
        <mobileNavbar />
        <mobilesidebar />
        <div class="px-3 mt-16">
            <div class="">
                <div class="d-flex justify-content-between mb-4">
                    <p class="text-xl text--dark font-medium">For you</p>
                </div>
                
                <playlistcard />
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-4">
                    <p class="text-xl text--dark font-medium">Popular playlists</p>
                    <nuxt-link to="/categories" class="text--dark text-decoration-underline">
                        view all
                    </nuxt-link>
                </div>
                
                <playlistcard />
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-4">
                    <p class="text-xl text--dark font-medium">Gift playlists</p>
                </div>
                <div class="py-5 bg--light px-3">
                    <p class="text-2xl">Get a special playlist for you or that special someone today</p>
                    <nuxt-link to="/gift" class="btn bg--dark text--light float-end">
                        Get playlist
                        <i class="bi bi-arrow-right"></i>
                    </nuxt-link>
                </div>
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-4">
                    <p class="text-xl text--dark font-medium">Category</p>
                    <nuxt-link to="/categories" class="text--dark text-decoration-underline">
                        view all
                    </nuxt-link>
                </div>
            
                <categorycard />
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
    layout: 'mobile'
    

}
</script>