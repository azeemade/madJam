<template>
    <div class="input-group has-icon" :class="width">
        <span class="form-control-feedback">
            <i class="bi bi-search text--dark-50"></i>
        </span>
        <input type="text" placeholder="Search for Artists, Playlists, Categories" 
        @click="openSearch" class="form-control rounded-lg searchbar"
        v-show="channel == 'homepage'" v-model="search">
        <input type="text" :placeholder="channel=='category' ? 'Search in categories': 'Search in playlists'" 
        class="form-control rounded-lg searchbar"
        v-show="channel != 'homepage'" @input="$emit('update:searchItem', $event.target.value)">
    </div>
</template>
<script>
export default {
    name: 'Searchbar',
    props:{
        channel: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: ''
        },
        searchItem: {
            type: String,
            default: ''
        },
    },
    emits: ['update:searchItem'],
    data(){
        return{
            search: ""
        }
    },
    methods:{
        openSearch(e){
            this.$router.push('/search?q=')
        }
    },
    /*created(){
        //SearchData(){
            this.$store.commit('search', this.search)
        //}
    }*/
}
</script>