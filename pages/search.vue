<template>
    <div>
        <div class="mobile">
            <div class="input-group">
                <Nuxt-link class="bg--grey-50 btn pt-3" id="search-addon" to="/home">
                    <i class="bi bi-chevron-left text--dark-50"></i>
                </Nuxt-link>
                <input type="text" :placeholder="search_title" 
                class="form-control searchbar border-0 pt-3"
                aria-label="Search madjam" aria-describedby="search-addon">
            </div>
            <div class="mb-3 pb-2 mt-2 border-bottom">
                <ul class="d-flex align-items-center justify-center text--dark">
                    <li class="mr-3">
                        <Nuxt-link to="/search" class="py-1 px-3 text--dark rounded-3xl border-link">All</Nuxt-link>
                    </li>
                    <li class="mr-3">
                        <Nuxt-link to="/search/playlist" class="py-1 px-3 text--dark rounded-3xl border-link">Playlist</Nuxt-link>
                    </li>
                    <li>
                        <Nuxt-link to="/search/category" class="py-1 px-3 text--dark rounded-3xl border-link">Category</Nuxt-link>
                    </li>
                </ul>
            </div>
            <Nuxt-child class="px-3"></Nuxt-child>
        </div>
        <div class="desktop">
            This is a desktop device
        </div>
    </div>
</template>
<script>
export default {
    name: 'search',
    //layout: (ctx) => ctx.$device.isMobile ? 'default' : 'desktop',
    layout: window.matchMedia("(min-width: 768px)".matches) ? 'desktop' : 'default',
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