<template>
    <div>
        <div class="d-flex mb-3 justify-content-between search-result p-2 rounded-2 align-items-center" v-for="item, index in categories" :key="index">
            <div class="d-flex align-items-center">
                <div class="mr-2">
                    <img :src="require('~/assets/images/'+item.url+'.png')" alt="" class="rounded-full h-12" width="48">
                </div>
                <div>
                    <p class="text--dark font-semibold">{{item.title}}</p>
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
                    id: 2,
                    title: 'name 2',
                    url: 'heroImage',
                },
                {
                    id: 4,
                    title: 'name 4',
                    url: 'heroImage',
                },
            ]
        }
    }
}
</script>