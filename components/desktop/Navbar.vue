<template>
    <nav class="fixed-top bg--light">
        <div v-if="$route.name === 'index'">
            <div class="container">
                <p class="text--dark fs-3 font-bold py-1">madJam</p>
            </div>
        </div>
        <div v-else>
            <div class="ml-56 my-3">
                <div class="d-flex justify-between">
                    <searchbar :width="'w-50 ml-32'"/>
                    <div class="d-flex align-items-center mr-5">
                        <div class="mr-2">
                            <div v-if="$store.state.username == ''">
                                <img src="~/assets/images/avatar.png" alt="avatar" width="36" height="36">
                            </div>
                            <div v-else>
                                <!--<img :src="require('https://api.multiavatar.com/'+$store.state.username+'.png')" alt="avatar" width="36" height="36">-->
                                <img src="" alt="avatar" width="36" height="36">
                            </div>
                        </div>
                        <p>{{$store.state.username}}</p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import searchbar from '../utils/searchbar.vue'
export default {
  components: { searchbar },
    name: 'desktopNavbar',
}
</script>