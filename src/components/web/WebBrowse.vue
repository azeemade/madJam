<template>
    <div>
        <div class="mb-16">
            <p class="text-4xl font-bold mb-4 text--dark">Browse</p>
            <hr class="bg--dark">
        </div>
        <div class="d-flex mb-9">
            <div class="col-md-3">
                <!--<NuxtLink :to="`/playlists/${item.name}`">-->
                    <p class="mb-2 small text--dark-50"></p>
                    <div>
                        <img src="" alt="" class="rounded-lg mb-3" width="136" height="112">
                    </div>
                    <p class="text--dark mb-1 font-semibold">Tracks in queue</p>
                <!--</NuxtLink>--> 
            </div>
            <div class="col-md-3">
                <!--<NuxtLink :to="`/playlists/${item.name}`">-->
                    <p class="mb-2 small text--dark-50">NEW PLAYLIST</p>
                    <div>
                        <img src="" alt="" class="rounded-lg mb-3" width="136" height="112">
                    </div>
                    <p class="text--dark mb-1 font-semibold">Playlist name</p>
                    <p class="text--dark-50 mt-1 small">15 songs</p>
                <!--</NuxtLink>--> 
            </div>
            <div class="col-md-3">
                <!--<NuxtLink :to="`/playlists/${item.name}`">-->
                    <p class="mb-2 small text--dark-50">UPDATED PLAYLIST</p>
                    <div>
                        <img src="" alt="" class="rounded-lg mb-3" width="136" height="112">
                    </div>
                    <p class="text--dark mb-1 font-semibold">Playlist name</p>
                    <p class="text--dark-50 mt-1 small">15 songs</p>
                <!--</NuxtLink>--> 
            </div>
            <div class="col-md-3">
                <!--<NuxtLink :to="`/playlists/${item.name}`">-->
                    <p class="mb-2 small text--dark-50">MOST VIEWED</p>
                    <div>
                        <img src="" alt="" class="rounded-lg mb-3" width="136" height="112">
                    </div>
                    <p class="text--dark mb-1 font-semibold">Playlist name</p>
                    <p class="text--dark-50 mt-1 small">15 songs</p>
                <!--</NuxtLink>--> 
            </div>
        </div>
        <div class=" mb-9">
            <div class="mb-8 d-flex justify-between">
                <p class="text--dark font-bold font-2xl">Dedicated playlists</p>
                <router-link to="/dedicated" class="text--dark font-bold text-decorate-underline">view all</router-link>
            </div>
            <playlistcardcol :data="_data" />
        </div>
        <div class=" mb-9">
            <p class="text--dark mb-8 font-bold font-2xl">Most viewed</p> 
            <playlistcardcol :data="_data" />
        </div>
        <div class=" mb-9">
            <p class="text--dark mb-8 font-bold font-2xl">Recently updated</p> 
            <playlistcardcol :data="_data" />
        </div>
    </div>
</template>
<script>
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
export default {
  components: { PlaylistCardCol },
  name: 'WebBrowse',
  data(){
        return{
            _data: []
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