<template>
    <div class="overflow-cards">
        <div class="plalist-card-sm mr-4" v-for="item, index in categories" :key="index">
            <img :src="require('~/assets/images/'+item.url+'.png')" alt="" class="rounded-lg mb-3" width="136" height="112">
            <p class="text--dark mb-1 font-semibold">{{item.title}}</p>
            <p class=" text-xs text--dark-50">{{item.size}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'playlistcard',
    data(){
        return{
            categories: [
                {
                    id: 1,
                    title: 'name 1',
                    url: 'heroImage',
                    size: '9 songs'
                },
                {
                    id: 2,
                    title: 'name 2',
                    url: 'heroImage',
                    size: '9 songs'
                },
                {
                    id: 3,
                    title: 'name 3',
                    url: 'heroImage',
                    size: '9 songs'
                },
                {
                    id: 4,
                    title: 'name 4',
                    url: 'heroImage',
                    size: '9 songs'
                },
            ]
        }
    }
}
</script>