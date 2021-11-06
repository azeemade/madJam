<template>
    <div>
        <div class="mobile">
            <div class="input-group">
                <router-link class="bg--grey-50 btn pt-3" id="search-addon" to="/home">
                    <i class="bi bi-chevron-left text--dark-50"></i>
                </router-link>
                <input type="text" :placeholder="search_title" 
                class="form-control searchbar border-0 pt-3"
                aria-label="Search madjam" aria-describedby="search-addon">
            </div>
            <div class="mb-3 pb-2 mt-2 border-bottom">
                <ul class="d-flex align-items-center justify-center text--dark">
                    <li class="mr-3">
                        <router-link to="/search" class="py-1 px-3 text--dark rounded-3xl border-link">All</router-link>
                    </li>
                    <li class="mr-3">
                        <router-link to="/search/playlist" class="py-1 px-3 text--dark rounded-3xl border-link">Playlist</router-link>
                    </li>
                    <li>
                        <router-link to="/search/category" class="py-1 px-3 text--dark rounded-3xl border-link">Category</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="desktop">
            This is a desktop device
        </div>
    </div>
</template>
<script>
export default {
    name: 'Search',
    data(){
        return{
            search_title: "Search madjam"
        }
    },

    methods: {
        goBack(){
            window.history.back()
        }
    }
}
</script>
<style scoped>
a:hover{
    color: #3f3d56;
}
</style>