<template>
        <MobileSidebar />
        <MobileNavbar />
        <div class="px-3 mt-16">
            <div class="">
                <div class="d-flex justify-content-between mb-3">
                    <p class="text-xl text--dark font-medium">For you</p>
                </div>
                
                <PlaylistCard :playlists="ForYou" />
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-3">
                    <p class="text-xl text--dark font-medium">Popular playlists</p>
                    <router-link to="/playlists" class="text--dark text-decoration-underline">
                        view all
                    </router-link>
                </div>
                
                <PlaylistCard :playlists="popPlaylists"/>
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-3">
                    <p class="text-xl text--dark font-medium">Gift playlists</p>
                </div>
                <div class="py-5 bg--light px-3">
                    <p class="text-2xl mb-2">Get a special playlist for you or that special someone today</p>
                    <router-link to="/gift" class="btn bg--dark text--light float-end">
                        Get playlist
                        <i class="bi bi-arrow-right"></i>
                    </router-link>
                </div>
            </div>

            <div class="mt-9">
                <div class="d-flex justify-content-between mb-3">
                    <p class="text-xl text--dark font-medium">Explore categories</p>
                    <router-link to="/categories" class="text--dark text-decoration-underline">
                        view all
                    </router-link>
                </div>
            
                <CategoryCardCol :categories="exCategories" />
            </div>

            <SubscribeModal />
        </div>
</template>
<script>
import PlaylistCard from '@/components/mobile/PlaylistCard.vue'
import CategoryCard from '@/components/utils/CategoryCard.vue'
import SubscribeModal from '@/components/utils/SubscribeModal.vue'
import MobileNavbar from '@/components/mobile/Navbar.vue'
import MobileSidebar from '@/components/mobile/Sidebar.vue'
import CategoryCardCol from '@/components/utils/CategoryCardCol.vue'
import controller from '@/assets/js/controller.js'
export default {
    name: 'MobileHome',
    components: { MobileSidebar, MobileNavbar, PlaylistCard, CategoryCard, SubscribeModal,
     CategoryCardCol },
    data(){
        return{
        }
    },
    computed:{
        ForYou(){
            var fyPlaylists = controller.ForYou()
            return fyPlaylists
        },

        popPlaylists(){
            var popPlaylists = controller.PopularPlaylists()
            return popPlaylists
        },
        exCategories(){
            var exCategories = controller.ExploreCategories()
            return exCategories
        }
    }
}
</script>