<template>
    <div>
        <div class="modal left fade" id="mobileModal" tabindex="-1" aria-labelledby="mobileModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border-0 bg--light">
                    <div class="modal-header border-0 mb-4">
                        <button type="button" class="btn-close text--dark" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mt-14 mb-4">
                            <div class="mb-4">
                                <div v-if="$store.state.username == ''">
                                    <img src="@/assets/images/avatar.png" alt="avatar" width="64" height="64">
                                </div>
                                <div v-else>
                                    <img :src="'https://api.multiavatar.com/'+$store.state.username+'.png'" alt="avatar" width="36" height="36">
                                    <img src="" alt="avatar" width="36" height="36">
                                </div>
                            </div>
                            <p class="mb-3 text-4xl text--dark font-semibold">Hello {{username}},</p>
                            <p class="text--dark font-light">What do you want to listen to today</p>
                        </div>

                        <Searchbar channel="homepage" />

                        <div class="mt-5 d-grid">
                            <router-link to="/home" class="p-2 rounded-md">
                                <i class="bi bi-house mr-5"></i>
                                Home
                            </router-link>
                            <router-link to="/browse" class="p-2 rounded-md" data-bs-dismiss="modal">
                                <i class="bi bi-grid mr-5"></i>
                                Browse
                            </router-link>
                            <router-link to="/subscribe" class="p-2 rounded-md" data-bs-dismiss="modal">
                                <i class="bi bi-envelope mr-5"></i>
                                Subscribe
                            </router-link>
                            <router-link to="/contribute" class="p-2 rounded-md" data-bs-dismiss="modal">
                                <i class="bi bi-inbox mr-5"></i>
                                Contribute
                            </router-link>
                            <router-link to="/gift" class="p-2 rounded-md" data-dismiss="modal">
                                <i class="bi bi-gift mr-5"></i>
                                Gift playlist
                            </router-link>
                        </div>
                        <!--<ul class="mt-5">
                            <li class="mb-3">
                                
                            </li>
                            <li>
                                
                            </li>
                            <li class="mb-3">
                                <button class="p-2 rounded-md" data-bs-toggle="modal" data-bs-target="#subscribeModal">
                                    <i class="bi bi-envelope-open mr-5"></i>
                                    Subscribe
                                </button>
                            </li>
                            <li>
                                <button class="p-2 rounded-md" data-bs-toggle="modal" data-bs-target="#contributeModal">
                                    <i class="bi bi-inbox mr-5"></i>
                                    Contribute
                                </button>
                            </li>
                            <li class="mb-3">
                                <router-link to="/gift" class="p-2 rounded-md">
                                    <i class="bi bi-gift mr-5"></i>
                                    Gift playlist
                                </router-link>
                            </li>
                        </ul>-->
                    </div>
                </div>
            </div>
        </div>
        <!--<subscribe />
        <contribute />-->
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
            'username'
        ])
    }
}
</script>
<style scoped>
    .router-link-exact-active {
        background-color: #b6c9da80;
    }
    .modal.left .modal-dialog{
		position: fixed;
		margin: auto;
		-webkit-transform: translate3d(0%, 0, 0);
		    -ms-transform: translate3d(0%, 0, 0);
		     -o-transform: translate3d(0%, 0, 0);
		        transform: translate3d(0%, 0, 0);
    }

    .modal-content{
        height: 650px;
        overflow-y: auto;
        width: 315px;
    }
    .modal.left.fade .modal-dialog {
        left: 0px;
        -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
        -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
        -o-transition: opacity 0.3s linear, right 0.3s ease-out;
        transition: opacity 0.3s linear, right 0.3s ease-out;
	}
	
	.modal.right.fade.in .modal-dialog {
		right: 0;
	}
    /*::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #b6c9da80; 
    }

    ::-webkit-scrollbar-thumb {
        background: #3f3d5680; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #3f3d56; 
    }*/
</style>