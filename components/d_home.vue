<template>
    <div>
        <div class="mb-9">
            <p class="mb-8 text--dark font-bold font-2xl">Gift playlist</p>
            <div class="rounded-lg bg--light">
                <p class="pt-7 mb-3.5 text-4xl text--dark pl-14">Get a custom made playlist <br> for you or that special someone today</p>
                <div class="d-flex justify-end pb-4 pr-14">
                    <nuxt-link to="/gift" class="btn text--dark bg--primary">Gift playlist</nuxt-link>
                </div>
            </div>
        </div>
        <div>
            <p class="mb-8 text--dark font-bold font-2xl">For you</p>
            <playlistcardcol  :data="_data"/>
        </div>
        <div>
            <p class="mb-8 text--dark font-bold font-2xl">Popular playlist</p>
            <playlistcardcol  :data="_data"/>
        </div>
        <div>
            <div class="mb-8 d-flex justify-between">
                <p class="text--dark font-bold font-2xl">Categories</p>
                <nuxt-link to="/categories" class="text--dark font-bold text-decorate-underline">view all</nuxt-link>
            </div>
            <categorycardcol :data="category" />
        </div>
    </div>    
</template>
<script>
import dummy from '~/static/db.json'
import playlistcardcol from './mobile/playlistcardcol.vue'
import Categorycardcol from './utils/categorycardcol.vue'
export default {
  components: { playlistcardcol, Categorycardcol },
    name: 'd-home',
    data(){
        return{
            _data: [],
            category: dummy
        }
    },

    beforeMount(){
        this.$axios.$get('https://api.spotify.com/v1/users/azeembaba/playlists?limit=4',
        {  
            headers: { 
            'Authorization': 'Bearer BQCcBbeGn--m2--SZ45vKmRSnCqK01cpgJDyXLBz5ie604hAvL2QPWALzTCGbZq-lr_2PVcIe613Xswsg8n2SkIVgf2a5RRWEWS6Xgl2LJONf2nCaDwAInkLdP8zXNpApvu7SSnhLVanu1mai5Flak6ymg'
            },
        })
        .then(response => this._data = response.items)
    }

}
</script>