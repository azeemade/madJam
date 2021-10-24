<template>
    <nav class="fixed-top">
        <div v-if="$route.name === 'index'">
            <div class="container">
                <p class="text--dark fs-4 font-bold">madJam</p>
            </div>
        </div>
        <div v-else>
            <div class="container">
                <div class="d-flex justify-between">
                    <searchbar />
                    <div>
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