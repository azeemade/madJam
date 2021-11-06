<template>
    <div class="row">
        <div class="col-6 col-md-3 mb-4" v-for="item in data.playlists" :key="item.id" @click="$router.push(`/playlists/${item.slug}`)">
            <router-link :to="`/playlists/${item.slug}`">
                    <img :src="'@/assets/images/'+item.url+'.png'" alt="" class="rounded-lg mb-3" width="136" height="112">
                <p class="text--dark mb-1 font-semibold">{{item.title}}</p>
                <p class="text--dark-50 mb-1 text-xs">{{item.size}}</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PlaylistCardCol',
    props:{
        data: {
            type: Object,
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