<template>
    <div>
        <div class="mobile">
            <div class="d-flex mt-2 mx-2 align-items-baseline">
                <div class="input-group has-icon mr-3">
                    <span class="form-control-feedback">
                        <i class="bi bi-search text--dark-50"></i>
                    </span>
                    <input type="text" placeholder="Search for Artists, Playlists, Categories" class="form-control rounded-lg searchbar" v-model="search">
                </div>
                <a class="text--dark font-bold text-decoration-none" @click="goBack">Cancel</a>
            </div>

            <div class="my-3">
                <div v-show="search == '' && recents.length != 0" class="mx-2">
                    <p class="font-bold text--dark text-xl ml-4">Recents</p>
                    <ul class="rounded pl-0 shadow-sm bg-white">
                        <li class="" v-for="recent, index in recents" :key="index">
                            <router-link :to="recent.url" class="justify-content-between d-flex align-items-center text--dark text-decoration-none">
                                <div class="d-flex ml-4 align-items-center">
                                    <img :src="recent.image" alt="" class="mr-3" width="56" height="56">
                                    <p class="mb-0">{{recent.title}}</p>
                                </div>
                                <div class="mr-4">
                                    <i class="bi bi-chevron-right"></i>
                                </div>  
                            </router-link>
                             <hr class="mr-4 ml-20 my-1">
                        </li>
                    </ul>
                </div>
                <div v-show="search != ''&& playlists.length != 0" class="mx-2">
                    <p class="font-bold text--dark text-xl ml-4">Playlists</p>
                    <ul class="rounded pl-0 shadow-sm bg-white">
                        <li class="" v-for="item, index in playlists" :key="index">
                            <router-link :to="'/playlists/'+item.id" class="justify-content-between d-flex align-items-center text--dark text-decoration-none" @click="AddRecents(item.playlist_image, item.playlist_title, '/playlists/'+item.id)">
                                <div class="d-flex ml-4 align-items-center">
                                    <img :src="item.playlist_image" alt="" class="mr-3" width="56" height="56">
                                    <p class="mb-0">{{item.playlist_title}}</p>
                                </div>
                                <div class="mr-4">
                                    <i class="bi bi-chevron-right"></i>
                                </div>  
                            </router-link>
                             <hr class="mr-4 ml-20 my-1">
                        </li>
                        <li class="d-flex justify-content-center">
                            <button class="text--dark font-semibold btn" @click.prevent="LoadMore(4, 'playlist')">View More</button>
                        </li>
                    </ul>
                </div>
                <div v-show="search != '' && categories.length != 0" class="mx-2">
                    <p class="font-bold text--dark text-xl ml-4">Categories</p>
                    <ul class="rounded pl-0 shadow-sm bg-white">
                        <li class="" v-for="item, index in categories" :key="index">
                            <router-link :to="'/categories/'+item.id" class="justify-content-between d-flex align-items-center text--dark text-decoration-none" @click="AddRecents(item.image, item.category_title, '/categories/'+item.id)">
                                <div class="d-flex ml-4 align-items-center">
                                    <img :src="item.image" alt="" class="mr-3" width="56" height="56">
                                    <p class="mb-0">{{item.category_title}}</p>
                                </div>
                                <div>
                                    <i class="bi bi-chevron-right mr-4"></i>
                                </div>  
                            </router-link>
                             <hr class="mr-4 ml-20 my-1">
                        </li>
                        <li class="d-flex justify-content-center">
                            <button class="text--dark font-semibold btn" @click.prevent="LoadMore(4, 'category')">View More</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="desktop">
            This is a desktop device
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import controller from '@/assets/js/controller.js'
export default {
    name: 'Search',
    data(){
        return{
            search: '' || this.$route.query.q,
            pagPlaylist: 4,
            pagCategory: 4,
        }
    },

    methods: {
        goBack(){
            window.history.back()
        },
        LoadMore(n, channel){
            channel === 'playlist' ? this.pagPlaylist += n : this.pagCategory += n;
        },
        AddRecents(image, title, route){
            const search = {
                url: route,
                title: title,
                image: image,
            }
            this.$store.commit('AddRecents', search);
        }
    },
    computed:{
        ...mapGetters([
            'recents'
        ]),
        playlists(){
            return controller.AllPlaylists().filter(a => {
                var title = a.playlist_title.toLowerCase().includes(this.search.toLowerCase());
                var tag = a.playlist_tags.toLowerCase().includes(this.search.toLowerCase());
                return title || tag;
            }).slice(0,this.pagPlaylist);
        },
        categories(){
            return controller.AllCategories().filter(a => {
                var title = a.category_title.toLowerCase().includes(this.search.toLowerCase());
                var tag = a.tags.toLowerCase().includes(this.search.toLowerCase());
                return title || tag;
            }).slice(0,this.pagPlaylist);
        }
    }
    
    /*metaInfo: {
        title: 'Search',
        meta: [
        { name: 'description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.'}, 
        { property: 'og:title', content: 'Search' },
        { property: 'og:url', content: 'https://madjam.netlify.app/search' },
        { property: 'og:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        { property: 'twitter:title', content: 'Search' },
        { property: 'twitter:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        ]
    }*/
}
</script>
<style scoped>
a:hover{
    color: #3f3d56;
}
body{
    background-color: #f8fafb;
}
img{
    max-height: 56px;
}
hr{
    opacity: .1;
}
</style>