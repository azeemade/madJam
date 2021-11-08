<template>
    <div class="overflow-cards mb-4">
        <div class="col-4 col-md-3 mr-3 align-baseline flex" v-for="item, index in categories" :key="index">
            <router-link :to="`/categories/${item.id}`">
                <div class="category-card p-2">
                    <p class="text--dark text-xs mb-0 mr-3" v-html="item.category_title.length > 6 ? item.category_title.substring(0,6) + '...' : item.category_title"></p>
                    <i class="bi bi-arrow-right"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CategoryCardCol',
    props:{
        categories: {
            type: Object,
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