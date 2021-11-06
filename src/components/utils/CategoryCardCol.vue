<template>
    <div class="row">
        <div class="col-4 col-md-3 mb-4" v-for="item, index in categories" :key="index">
            <div class="category-card p-2">
                <!--<img :src="'@/assets/images/'+item.url+'.png'" alt="" class="rounded-lg mb-3" width="96" height="84">-->
                <p class="text--dark text-xs">{{item.title}}</p>
                <i class="bi bi-arrow-right"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  components: {  },
    name: 'CategoryCardCol',
    props:{
        data: {
            //type: Array,
            required: true
        }
    },

    data(){
        return{
            categories: null,
        }
    }
}
</script>