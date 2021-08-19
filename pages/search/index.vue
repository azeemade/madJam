<template>
    <div>
        <div class="d-flex justify-content-between mb-3 search-result p-2 rounded-2 align-items-center" v-for="item, index in categories" :key="index">
            <div class="d-flex">
                <div class="mr-2">
                    <img :src="require('~/assets/images/'+item.url+'.png')" alt="" :class="item.class=='Playlist' ? 'rounded-lg' : 'rounded-full'" width="48" class="h-12">
                </div>
                <div>
                    <p class="text--dark font-semibold">{{item.title}}</p>
                    <p class="text--dark-50 small">{{item.class}}</p>
                </div>
            </div>
            <div>
                <i class="bi bi-chevron-right text--dark"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            categories: [
                {
                    id: 1,
                    title: 'name 1',
                    url: 'heroImage',
                    class: 'Playlist',
                },
                {
                    id: 2,
                    title: 'name 2',
                    url: 'heroImage',
                    class: 'Category',
                },
                {
                    id: 3,
                    title: 'name 3',
                    url: 'heroImage',
                    class: 'Playlist',
                },
                {
                    id: 4,
                    title: 'name 4',
                    url: 'heroImage',
                    class: 'Category',
                },
            ]
        }
    },
}
</script>