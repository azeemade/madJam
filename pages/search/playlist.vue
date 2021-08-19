<template>
    <div>
        <div class="d-flex mb-3 justify-content-between search-result p-2 rounded-2 align-items-center" v-for="item, index in categories" :key="index">
            <div class="d-flex">
                <div class="mr-2">
                    <img :src="require('~/assets/images/'+item.url+'.png')" alt="" class="rounded-lg h-12" width="48">
                </div>
                <div>
                    <p class="text--dark font-semibold">{{item.title}}</p>
                    <p class="text--dark-50 small">{{item.size}}</p>
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
                    size: '9 songs',
                },
                {
                    id: 3,
                    title: 'name 3',
                    url: 'heroImage',
                    size: '13 songs',
                },
            ]
        }
    }
}
</script>