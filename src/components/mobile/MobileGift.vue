<template>
    <div>
        <MobileNavbar />
        <MobileSidebar />
        <div class="px-3 mt-16">
            <p class="font-semibold fs-3 text--dark mb-4">Gift playlists</p>
            <p class="text--dark-50">Playlist details</p>
            <hr class="bg--grey-50 mb-3">
            <div>
                <!--Image section-->
            </div>
            <div class="mb-3">
                <label for="pname" class="text--dark">Playlist name *</label>
                <input type="text" name="pname" id="pname" class="form-control" v-model="pname">
            </div>
            <div class="mb-3">
                <label for="psize" class="text--dark">Playlist size *</label>
                <input type="text" name="psize" id="psize" class="form-control" v-model="psize">
            </div>
            <div class="mb-3">
                <label for="remarks" class="text--dark">Remarks</label>
                <input type="text" name="remarks" id="remarks" class="form-control" v-model="remarks"
                placeholder="Special note to recipient (optional)">
            </div>
            <div class="mb-3">
                <label for="pdesc" class="text--dark">Description</label>
                <textarea name="pdesc" id="pdesc" cols="30" rows="5" class="form-control"  v-model="description"
                placeholder="Specify an artiste, category, genre, mood, song or other stuffs to narrow the playlist interest."></textarea>
            </div>
            <button class="bg--dark text--light btn btn-lg w-100 mb-3">Continue</button>
             <div v-show="message != null" :class="message == 'Success' ? 'alert alert-success' : 'alert alert-danger'">
                <p :class="message == 'Success' ? 'text-success' : 'text-danger'">{{message}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import MobileNavbar from '@/components/mobile/Navbar.vue'
import MobileSidebar from '@/components/mobile/Sidebar.vue'
export default {
    name: 'MobileGift',
    components: { MobileSidebar, MobileNavbar },
    data(){
        return{
            pname: null,
            psize: null,
            remarks: null, 
            description: null,
            message: null
        }
    },
    methods:{
        Submit(){
            if (this.pname == null || this.psize == null || this.description == null ){
                this.message = "One or more fields are empty"
            }else{
                this.message = "Success"
            }   

            setTimeout(() => {
                this.message = null;
            }, 5000);
        }
    }
}
</script>
<style scoped>
    .form-control::placeholder {
        color: #c4c4c480;
    }
</style>