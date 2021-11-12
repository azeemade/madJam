<template>
    <div v-show="gift_1">
        <MobileSidebar />
            <MobileNavbar />
        
            <div class="px-3 mt-16">
                <p class="font-semibold fs-3 text--dark mb-4">Gift playlists</p>
                <p class="text--dark-50">Playlist details</p>
                <hr class="bg--grey-50 mb-3">

                <div class="mb-3">
                    <div class="d-flex justify-content-center">
                        <!--<div class="playlists-image rounded-lg mb-3" :style="{'background-image': 'url('+preview == '' ? '/src/assets/images/madJam_cover.png' : preview+')'}"></div>-->
                        <img :src="preview == '' ? '/src/assets/images/madJam_cover.png' : preview" class="rounded --img" width="136" heigth="112">
                    </div>
                    <div class="mt-1 d-flex justify-content-center">
                        <label for="scfile"  class="text-primary btn-sm btn fs-7" title="Upload image">
                            <input type="file" id="scfile" name="scImage" autocomplete="off" @change="attachimage" 
                            class="hidden">
                            Add playlist cover
                        </label>
                    </div>
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
                <button class="bg--dark text--light btn btn-lg w-100 mb-3" @click="Submit">Continue</button>
                <div v-show="message != null">
                    <Error :alert_type="'warning'" :message="message" />
                </div>
            </div>
    </div>
    <div ref="formContainer"></div>
    <div v-show="gift_2">
        <MobileGift2 />
    </div>
</template>
<script>
import MobileNavbar from '@/components/mobile/Navbar.vue'
import MobileSidebar from '@/components/mobile/Sidebar.vue'
import Error from '@/components/utils/Error.vue'
import MobileGift2 from '@/components/mobile/MobileGift2.vue'
import {mapGetters} from 'vuex'
export default {
    name: 'MobileGift',
    components: { MobileSidebar, MobileNavbar, Error, MobileGift2 },
    data(){
        return{
            pname: null,
            psize: null,
            remarks: null, 
            description: null,
            message: null,
            fullPage: false,
            preview: '',
            cover: null

        }
    },
    methods:{
        attachimage(e) {
            e.preventDefault();
            var files = e.target.files

            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target.result;
                this.cover = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        Submit(){
            if (!this.pname || !this.psize || !this.description ){
                this.message = "One or more fields are empty"
            }else if(!this.cover){
                this.message = "Add a playlist cover";
            }   
            else{
                setTimeout(() => {
                    this.message = null;
                }, 5000);

                let loader = this.$loading.show({
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: false,
                    onCancel: this.onCancel,
                    loader: "bars",
                });

                const gift = {
                    cover: this.cover,
                    name: this.pname,
                    size: this.psize,
                    remarks: this.remarks,
                    description: this.description
                }

                this.$store.commit('Gift', gift)
                this.$store.commit('OpenGift2')

                loader.hide()
            }
        }
    },
    computed:{
        ...mapGetters([
            'gift_1', 'gift_2'
        ])
    }
}
</script>
<style scoped>
    .form-control::placeholder {
        color: #c4c4c480;
    }
    .--img{
        max-height: 112px;
    }
</style>