<template>
    <div class="row">
        <div class="col-6 col-md-3 mb-4" v-for="item in playlists" :key="item.id">
            <router-link :to="`/playlists/${item.playlist_slug}`">
                <img :src="item.playlist_image" alt="" class="rounded-lg mb-3 playlist_image" width="136" height="112">
                <p class="text--dark mb-1 font-semibold" 
                v-html="item.playlist_title.length > 15 ? item.playlist_title.substring(0,15) + '...' : item.playlist_title"></p>
                <p class="text--dark-50 mb-1 text-xs">{{item.songs_count}} songs</p>
            </router-link>
        </div>
    </div>
</template>
<script>
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