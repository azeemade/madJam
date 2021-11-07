<template>
    <div class="overflow-cards">
        <div class="playlist-card-sm mr-4" v-for="item, index in playlists" :key="index">
            <router-link :to="`/playlists/${item.playlist_slug}`">
                <img :src="item.playlist_image" alt="" class="rounded-lg mb-3 playlist_image" width="136" height="112">
                <p class="text--dark mb-1 font-semibold">{{item.playlist_title}}</p>
                <p class=" text-xs text--dark-50">{{item.songs_count}} songs</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlaylistCard',
    props:{
        playlists: {
            type: Array,
        }
    },
    data(){
        return{
            
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