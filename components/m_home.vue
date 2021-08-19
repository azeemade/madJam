<template>
    <div class="px-3">
        <div class="mt-14 mb-4">
            <div class="mb-4">
                <div v-if="$store.state.username == ''">
                    <img src="~/assets/images/avatar.png" alt="avatar" width="36" height="36">
                </div>
                <div v-else>
                    <!--<img :src="require('https://api.multiavatar.com/'+$store.state.username+'.png')" alt="avatar" width="36" height="36">-->
                    <img src="" alt="avatar" width="36" height="36">
                </div>
            </div>
            <p class="mb-3 text-4xl text--dark font-semibold">Hello {{$store.state.username}},</p>
            <p class="text--dark font-light">What do you want to listen to today</p>
        </div>

        <searchbar channel="homepage" />

        <div class="mt-7">
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
</template>
<script>
import searchbar from '../components/utils/searchbar.vue'
import playlistcard from '../components/mobile/playlistcard.vue'
import categorycard from '../components/utils/categorycard.vue'
import Subscribemodal from './utils/subscribemodal.vue'
export default {
    name: 'mhome',
    components: { searchbar, playlistcard, categorycard, Subscribemodal },
    

}
</script>