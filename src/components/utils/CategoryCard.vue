<template>
    <div class="row">
        <div class="col-6 col-md-3 mb-4" v-for="item, index in categories" :key="index">
            <router-link :to="`/categories/${item.id}`">
                <div class="playlists-image rounded-lg mb-3" :style="{'background-image': 'url('+item.image+')'}" :title="item.category_title"></div>
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
    a{
        all: unset;
    }
</style>