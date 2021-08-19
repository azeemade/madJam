<template>
    <div>
        <div class="d-flex">
            <backbutton />

            <div>
                <img :src="require('~/assets/images/'+playlist.url+'.png')" alt="" class="rounded" width="184" height="144">
            </div>
        </div>
        <div class="mt-5">
            <p class="font-bold fs-4 text--dark text-center">{{playlist.title}}</p>
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
                <nuxt-link>Tag 1</nuxt-link>
                <nuxt-link>Tag 2</nuxt-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            slug: this.$route.params.slug
        }
    },
    computed: {
        ...mapState(["dummyx2"]),
        playlist(){
            return this.dummyx2.playlists.find(el => el.slug === this.slug);
        }
    }
}
</script>