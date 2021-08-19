<template>
    <div class="row">
        <div class="col-4 mb-4" v-for="item, index in categories.categories" :key="index">
                <img :src="require('~/assets/images/'+item.url+'.png')" alt="" class="rounded-lg mb-3" width="96" height="84">
                <p class="text--dark text-center text-xs">{{item.title}}</p>
        </div>
    </div>
</template>
<script>
import dummy from '~/static/db.json'
export default {
  components: {  },
    name: 'categorycard',
    data(){
        return{
            categories: dummy,
        }
    }
}
</script>