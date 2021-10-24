<template>
    <div class="row">
        <div class="col-6 col-md-3 mb-4" v-for="item in data" :key="item.id" @click="$router.push(`/playlists/${item.slug}`)">
            <NuxtLink :to="`/playlists/${item.name}`">
                <div v-for="img in item.images" :key="img.url">
                    <img :src="img.url" alt="" class="rounded-lg mb-3" width="136" height="112">
                </div>
                <p class="text--dark mb-1 font-semibold">{{item.name}}</p>
            </NuxtLink>
        </div>
    </div>
</template>
<script>
export default {
    name: 'playlistcardcol',
    props:{
        data: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
            playlists: [],
        }
    },
}
</script>