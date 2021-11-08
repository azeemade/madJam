<template>
    <div class="container pt-24">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <p class="mb-0 text-7xl text--dark">Listen to carefully curated playlists</p>
                </div>
                <div class="mb-8">
                    <p class="mb-0 text--dark">Browse a wide range of playlist created specially for your delight.
                        Available on Apple music, Spotify and Youtube music. 
                    </p>
                </div>
                <div class=" input-group mb-7 w-75">
                    <input type="text" placeholder="Enter a name" class="form-control searchbar name-input" v-model="username" aria-describedby="nameAddons">
                    <button class="btn bg--primary" type="button" id="nameAddons" @click="Continue">
                        Lets gooo
                        <i class="bi bi-arrow-right ml-1"></i>
                    </button>
                </div>
                <div v-show="message != null" class="alert alert-warning alert--section">
                    <p class="text-warning">{{message}}</p>
                </div>
            </div>
            <div class="col-md-4">
                <img src="@/assets/images/undraw_happy_music.png" alt="Listen to carefully curated playlists" width="392" height="344">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HeroSection",
    data(){
        return{
            username: null,
            message: null,
        }
    },

    methods:{
        Continue(e){
            e.preventDefault();
            if (this.username == null){
                this.message = 'Enter a name'
                setTimeout(() => {
                    this.message = null;
                }, 5000);
            }
            else{
                this.$store.commit('add_username', this.username);
                if (localStorage.getItem('username') != null) {
                    if (this.$route.query.redirect != null) {
                        this.$router.push(this.$route.query.redirect)
                    } else {
                        this.$router.push('/home')
                    }
                }
            }
        }
    },
}
</script>
<style scoped>
    body{
        background-color: #b6c9da19;
    }
</style>