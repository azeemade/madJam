<template>
    <div>
        <div class="modal right fade" id="contributeModal" tabindex="-1" aria-labelledby="contributeModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content border-0 bg--primary">
                    <div class="modal-header border-0 mb-4">
                        <button type="button" class="btn-close text--dark" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body px-0 pb-0">
                        <div class="mb-6 px-6">
                            <div class="mb-6">
                                <div class="mb-3">
                                    <div v-if="$store.state.username == ''">
                                        <img src="~/assets/images/avatar.png" alt="avatar" width="48" height="48">
                                    </div>
                                    <div v-else>
                                        <!--<img :src="require('https://api.multiavatar.com/'+$store.state.username+'.png')" alt="avatar" width="36" height="36">-->
                                        <img src="" alt="avatar" width="48" height="48">
                                    </div>
                                </div>
                                <p class="text-3xl text--dark font-semibold">{{$store.state.username}}</p>
                            </div>
                            <div class="pb-7">
                                <p class="font-bold text-4xl text--dark mb-3">Contribute to madJam</p>
                                <p class="font-light text--dark">
                                    Join us at madJam, add your playlists to our ever expanding playlist library. 
                                    Chance to get exclusive offers from the jammers club.
                                </p>
                            </div>
                        </div>
                        <div class="p-6 px-10 pb-10 bg-white">
                            <div>
                                <div class="mb-3">
                                    <label for="Name" class="text--dark">Name *</label>
                                    <input type="text" placeholder="firstname lastname" 
                                    class="form-control" v-model="name">
                                </div>
                                <div class="mb-3">
                                    <label for="Email" class="text--dark">Email *</label>
                                    <input type="text" placeholder="Enter your email" 
                                    class="form-control" v-model="email">
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="col-md-6 pr-1">
                                        <label for="Spotify" class="text--dark">Spotify *</label>
                                        <input type="text" placeholder="Enter your username" 
                                        class="form-control" v-model="spotify">
                                    </div>
                                    <div class="col-md-6 pl-1">
                                        <label for="Applemusic" class="text--dark">Apple music *</label>
                                        <input type="text" placeholder="Enter your username" 
                                        class="form-control" v-model="applemusic">
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="col-md-6 pr-1">
                                        <label for="Ytmusic" class="text--dark">Youtube music</label>
                                        <input type="text" placeholder="Enter your username" 
                                        class="form-control" v-model="ytmusic">
                                    </div>
                                    <div class="col-md-6 pl-1">
                                        <label for="Audiomack" class="text--dark">Audiomack</label>
                                        <input type="text" placeholder="Enter your username" 
                                        class="form-control" v-model="audiomack">
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <button class="text--primary bg--dark btn modal-btn" id="join-addon" @click="Submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            <div v-show="message != null" class="alert alert-warning">
                                <p class="text-danger">{{message}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
        
    </div>
</template>
<script>
export default {
    name: 'contribute',
    data(){
        return{
            name: null,
            email: null,
            spotify: null,
            applemusic: null,
            ytmusic: null,
            audiomack: null,
            message: null
        }
    },
    methods:{
        Submit(e){
            e.preventDefault();
            if (this.email || this.name && this.spotify || this.applemusic == null){
                this.message = 'one or more field is empty'
                setTimeout(() => {
                    this.message = null;
                }, 5000);
            }
            else{
                /** Airtable API to send to subscriber table */

                var el =document.getElementById('join-addon');
                el.dataDimiss = "modal";
            }
        }
    },
}
</script>
<style scoped>
    .modal.right .modal-dialog{
		position: fixed;
		margin: auto;
        bottom: 0px;
		-webkit-transform: translate3d(0%, 0, 0);
		    -ms-transform: translate3d(0%, 0, 0);
		     -o-transform: translate3d(0%, 0, 0);
		        transform: translate3d(0%, 0, 0);
    }

    .modal-content{
        height: 650px;
        overflow-y: auto;
    }
    .modal.right.fade .modal-dialog {
        right: 20px;
        -webkit-transition: opacity 0.3s linear, right 0.3s ease-out;
        -moz-transition: opacity 0.3s linear, right 0.3s ease-out;
        -o-transition: opacity 0.3s linear, right 0.3s ease-out;
        transition: opacity 0.3s linear, right 0.3s ease-out;
	}
	
	.modal.right.fade.in .modal-dialog {
		right: 0;
	}
    ::-webkit-scrollbar {
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
    }
</style>