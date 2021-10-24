<template>
    <div>
        <div class="modal right fade" id="subscribeModal" tabindex="-1" aria-labelledby="subscribeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
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
                                <p class="font-bold text-4xl text--dark mb-3">Join our subscribers list</p>
                                <p class="font-light text--dark">
                                    Be the first to know about our new playlists and 
                                    latest additions to our existing playlists for free.
                                </p>
                            </div>
                        </div>
                        <div class="p-6 bg-light">
                            <div class="input-group has-icon">
                                <span class="form-control-feedback">
                                    <i class="bi bi-envelope text--dark-50"></i>
                                </span>
                                <input type="text" placeholder="Enter your email address" 
                                class="form-control searchbar" aria-label="Email address"
                                aria-describedby="join-addon" v-model="email">
                                <button class="text--primary bg--dark btn modal-btn" id="join-addon" @click="Submit">
                                    Join
                                </button>
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
    name: 'subscribe',
    data(){
        return{
            email: null,
            message: null
        }
    },
    methods:{
        Submit(e){
            e.preventDefault();
            if (this.email == null){
                this.message = 'Email field cannot be empty'
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