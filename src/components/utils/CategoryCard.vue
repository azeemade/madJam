<template>
    <div class="overflow-cards">
        <div class="col-4" v-for="item, index in categories" :key="index">
            <img :src="'@/assets/images/'+item.url+'.png'" alt="" class="rounded-lg mb-3" width="96" height="84">
            <p class="text--dark text-xs">{{item.title}}</p>
        </div>
    </div>
</template>
<script>
export default {
  components: {  },
    name: 'CategoryCard',
    data(){
        return{
            categories: [
                {
                    id: 1,
                    title: 'name 1',
                    url: 'heroImage'
                },
                {
                    id: 2,
                    title: 'name 2',
                    url: 'heroImage'
                },
                {
                    id: 3,
                    title: 'name 3',
                    url: 'heroImage'
                },
                {
                    id: 4,
                    title: 'name 4',
                    url: 'heroImage'
                },
            ]
        }
    }
}
</script>