<template>
    <div class="row">
        <div class="col-6 mb-4" v-for="item in data.playlists" :key="item.slug">
            <NuxtLink :to="`/playlists/${item.slug}`">
                <img :src="require('~/assets/images/'+item.url+'.png')" alt="" class="rounded-lg mb-3" width="136" height="112">
                <p class="text--dark mb-1 font-semibold">{{item.title}}</p>
                <p class="font-light text-sm text--dark">{{item.description}}</p>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
import dummy from '~/static/db.json'
export default {
    name: 'playlistcard',
    props:{
        data: {
            required: true
        }
    },
    /*data(){
        return{
            playlist_s: dummy,
        }
    },*/
}
</script>