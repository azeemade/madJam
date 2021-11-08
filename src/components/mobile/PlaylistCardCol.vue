<template>
    <div class="row">
        <div class="col-6 col-md-3 mb-4" v-for="item in playlists" :key="item.id">
            <router-link :to="`/playlists/${item.id}`">
                <img :src="item.playlist_image" alt="" class="rounded-lg mb-3 playlist_image" width="136" height="112">
                <p class="text--dark mb-1 font-semibold" >{{TextTruncate(15, item.playlist_title)}}</p>
                <p class="text--dark-50 mb-1 text-xs">{{item.songs_count}} songs</p>
            </router-link>
        </div>
    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
export default {
    name: 'PlaylistCardCol',
    props:{
        playlists: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
        }
    },
    computed:{
        TextTruncate(n, text){
            return controller.TextTruncate(n, text)
        }
    }
}
</script>
<style scoped>
    .playlist_image{
        max-width: 136px;
        max-height: 112px;
    }
    a{
        all: unset;
    }
</style>