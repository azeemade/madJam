<template>
    <div class="row">
        <div class="col-6 col-md-3 mb-4" v-for="item, index in categories" :key="index">
            <router-link :to="`/categories/${item.id}`">
                <img :src="item.image" :alt="item.category_title" class="rounded-lg mb-3 playlist_image" width="136" height="112">
                <p class="text--dark font-semibold"  v-html="item.category_title.length > 15 ? item.category_title.substring(0,15) + '...' : item.category_title"></p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CategoryCard',
    props:{
        categories: {
            type: Object
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
        width: 136px;
        max-height: 112px;
    }
    a{
        all: unset;
    }
</style>