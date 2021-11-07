<template>
    <div>
        <div class="d-flex">
            <BackButton />

            <div>
                <img :src="playlist.playlist_image" alt="" class="rounded" width="184" height="144">
            </div>
        </div>
        <div class="mt-5">
            <p class="font-bold fs-4 text--dark text-center">{{playlist.playlist_title}}</p>
        </div>
        <div class="mt-4 d-flex">
            <a href="" class="btn btn-danger">Apple music</a>
            <a href="" class="btn btn-success">Spotify</a>
        </div>
        <div class="mt-4 d-flex">
            <p class="text--grey text-center">Avicii, David Guetta, Kygo, Martin Garrix, Alesso, Diplo are artiste and Lorem ipsium 
                germinisium titanium vanadium opium marianan idian cookies 
                herman biscuits and igbo fufu for sale at orile iganmu stadiu...
            </p>
        </div>
        <div class="my-3">
            <p class="text--dark">Tags</p>
            <div class="d-flex">
                <router-link to="">Tag 1</router-link>
                <router-link to="">Tag 2</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
import BackButton from '@/components/utils/BackButton.vue';
export default {
    name: 'Playlist',
    components: { BackButton},
    data(){
        return{
            playlist: null
        }
    },
    methods:{
        getPlaylist(){
            this.playlist = controller.FindPlaylist(this.$route.params.playlist_slug)
        }
    },
    beforeMount(){
        this.getPlaylist()
    }
}
</script>