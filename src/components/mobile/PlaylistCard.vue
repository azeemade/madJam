<template>
    <div class="overflow-cards">
        <div class="playlist-card-sm mr-4" v-for="item, index in playlists" :key="index">
            <router-link :to="`/playlists/${item.id}`">
                <div class="playlists-image rounded-lg mb-3" :style="{'background-image': 'url('+item.playlist_image+')'}" :title="item.category_title"></div>
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
    a{
        all: unset;
    }
</style>