<template>
    <div>
        <MobileNavbar />
        <MobileSidebar />
        <div class="mb-3 mx-4 mt-16">
            <div class="mb-6">
                <div class="mb-3">
                    <div v-if="$store.state.username == ''">
                        <img src="@/assets/images/avatar.png" alt="avatar" width="48" height="48">
                    </div>
                    <div v-else>
                        <img :src="'https://api.multiavatar.com/'+$store.state.username+'.png'" alt="avatar" width="60" height="60">
                    </div>
                </div>
                <p class="text-3xl text--dark font-semibold">Hello {{$store.state.username}},</p>
            </div>
            <div class="pb-7">
                <p class="font-bold text-4xl text--dark mb-3">Contribute to madJam</p>
                <p class="font-light text--dark">
                    Join us at madJam, add your playlists to our ever expanding playlist library. 
                    Chance to get exclusive offers from the jammers club.
                </p>
            </div>
        </div>
        <div class="bg-white  mx-4">
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
                <button class="text--light bg--dark btn-lg w-100 mb-3" @click="Submit">
                    Submit
                </button>
            </div>
            <div v-show="message != null">
                <Error :alert_type="'warning'" :message="message" />
            </div>
        </div>

    </div>
</template>
<script>
import MobileNavbar from '@/components/mobile/Navbar.vue'
import MobileSidebar from '@/components/mobile/Sidebar.vue'
import controller from '@/assets/js/controller.js'
import BackButton from '@/components/utils/BackButton.vue';
import Error from '../components/utils/Error.vue';
export default {
    name: 'Contribute',
    components: { MobileSidebar, MobileNavbar, BackButton, Error },
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
            }
        }
    },
}
</script>
<style scoped>
</style>