<template>
    <div class="action-sheet pt-9 pb-3 px-3">
        <div class="mb-3">
            <p class="mb-0 text-4xl text--dark font-semibold">Listen to carefully curated playlists</p>
        </div>
        <div class="mb-8">
            <p class="mb-0 text--dark">Browse a wide range of playlist created specially for your delight.
                Available on Apple music, Spotify and Youtube music. 
            </p>
        </div>
        <div class="mb-7">
            <input type="text" placeholder="Enter a name" class="form-control name-input" v-model="username">
        </div>
         <div class="d-flex text--primary justify-end">
            <a @click="Continue" class="btn bg--dark text--light">
                Lets gooo
                <i class="bi bi-arrow-right ml-1"></i>
            </a>
        </div>
        <div v-show="message != null" class="alert alert-warning alert--section">
            <p class="text-danger">{{message}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ActionSheet',
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
                this.$router.push('/home')
            }
        }
    },
}
</script>