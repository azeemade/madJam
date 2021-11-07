<template>
    <div class="overflow-cards mb-4">
        <div class="col-4 col-md-3 mr-3 align-baseline flex" v-for="item, index in categories" :key="index">
            <div class="category-card p-2">
                <!--<img :src="'@/assets/images/'+item.url+'.png'" alt="" class="rounded-lg mb-3" width="96" height="84">-->
                <p class="text--dark text-xs mb-0 mr-3">{{item.category_title}}</p>
                <i class="bi bi-arrow-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CategoryCardCol',
    props:{
        categories: {
            type: Array,
        }
    },

    data(){
        return{
        }
    }
}
</script>