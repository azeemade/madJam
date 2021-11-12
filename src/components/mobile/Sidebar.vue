<template>
    <div v-show="sidenav == true">
        <div class="border-0 bg--light px-3 sidebar">
            <div class="modal-header border-0 mb-4">
                <button type="button" class="btn-close text--dark" @click="closeSideNav"></button>
            </div>
            <div class="">
                <div class="mt-10 mb-4">
                    <div class="mb-4">
                        <div v-if="username == ''">
                            <img src="@/assets/images/avatar.png" alt="avatar" width="64" height="64">
                        </div>
                        <div v-else>
                            <img :src="'https://api.multiavatar.com/'+username+'.png'" alt="avatar" width="72" height="72">
                        </div>
                    </div>
                    <p class="mb-3 text-4xl text--dark font-semibold">Hello {{username}},</p>
                    <p class="text--dark font-light">What do you want to listen to today</p>
                </div>

                <Searchbar channel="homepage" />

                <div class="mt-5 d-grid">
                    <router-link to="/home" class="p-2 rounded-md" @click="closeSideNav">
                        <i class="bi bi-house mr-5"></i>
                        Home
                    </router-link>
                    <router-link to="/browse" class="p-2 rounded-md" @click="closeSideNav">
                        <i class="bi bi-grid mr-5"></i>
                        Browse
                    </router-link>
                    <router-link to="/subscribe" class="p-2 rounded-md" @click="closeSideNav">
                        <i class="bi bi-envelope mr-5"></i>
                        Subscribe
                    </router-link>
                    <router-link to="/contribute" class="p-2 rounded-md" @click="closeSideNav">
                        <i class="bi bi-inbox mr-5"></i>
                        Contribute
                    </router-link>
                    <router-link to="/gift" class="p-2 rounded-md" @click="closeSideNav">
                        <i class="bi bi-gift mr-5"></i>
                        Gift playlist
                    </router-link>
                </div>
            </div>
        </div>
        <div class="backdrop"></div>
    </div>
</template>
<script>

import Searchbar from '@/components/utils/Searchbar.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'MobileSidebar',
    components: { Searchbar },
    computed:{
        ...mapGetters([
            'username', 'sidenav'
        ]),
        body(){
            this.sidenav == true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";
        }
    },
    methods:{
        closeSideNav(){
            var boolval = false
            this.$store.commit('OpenSideNav', boolval)
        }
    },
}
</script>
<style scoped>
    .sidebar{
        width: 315px;
        height: 100vh;
        overflow-y: scroll;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1090;
    }
    .router-link-exact-active {
        background-color: #b6c9da80;
    }
    .rounded-md{
        text-decoration: none;
        color: #2f2e41;
    }
    .backdrop{
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100vh;
        background: black;
        right: 0px;
        opacity: .4;
        z-index: 1055;
    }
</style>