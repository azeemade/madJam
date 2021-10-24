<template>
    <div>
        <div>
            <div class="mb-16">
                <p class="text-5xl font-bold text--dark">Gift Playlist</p>
            </div>
            <div class="px-32">
                <div class="mb-14 border rounded">
                    <p class="text--dark-50 font-semibold text-2xl mb-6 p-4">Playlist details</p>
                    <div class="px-8">
                        <div class>
                            <image-upload />
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-8">
                                <label for="pname" class="text--dark font-semibold">Playlist name *</label>
                                <input type="text" placeholder="Enter playlist name" 
                                class="form-control" v-model="pname">
                            </div>
                            <div class="col-md-4">
                                <label for="psize" class="text--dark font-semibold">Playlist size *</label>
                                <input type="text" placeholder="Maximum of 16" 
                                class="form-control" v-model="psize">
                            </div>
                        </div>
                        <div>
                            <div class="mb-3">
                                <label for="remarks" class="text--dark font-semibold">Remarks</label>
                                <input type="text" placeholder="Special note (optional)" 
                                class="form-control" v-model="remarks">
                            </div>
                            <div class="mb-3">
                                <label for="description" class="text--dark font-semibold">Playlist description *</label>
                                <textarea name="description" id="description" cols="30" rows="10"
                                placeholder="Specify an artiste or artistes, category, genre, mood, song, or other classifications to narrow the playlist interest" 
                                class="form-control" v-model="description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border rounded mb-3">
                    <p class="text--dark-50 font-semibold text-2xl mb-6 p-4">Playlist recipient</p>
                    <div class="px-8">
                        <div>
                            <div class="mb-3">
                                <label for="recipient" class="text--dark font-semibold">Recipient *</label>
                                <div class="form-check">
                                    <input type="radio" name="recipient" class="form-check-input" id="recipient1" v-model="recipient" value="Self">
                                    <label for="recipient1" class="text--dark-50 form-check-label">Self</label>
                                </div>
                                <div class="form-check">
                                    <input type="radio" name="recipient" class="form-check-input" id="recipient2" v-model="recipient" value="Others">
                                    <label for="recipient2" class="text--dark-50 form-check-label">Others (Someone special)</label>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="rname" class="text--dark font-semibold">From *</label>
                                    <input type="text" placeholder="Enter your name" 
                                    class="form-control" v-model="fname">
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="text--dark font-semibold">Email *</label>
                                    <input type="text" placeholder="Enter your email" 
                                    class="form-control" v-model="femail">
                                </div>
                            </div>
                            <div class="row mb-3" v-show="recipient != 'Self'">
                                <div class="col-md-6">
                                    <label for="rname" class="text--dark font-semibold">To *</label>
                                    <input type="text" placeholder="Enter recipient name" 
                                    class="form-control" v-model="rname">
                                </div>
                                <div class="col-md-6">
                                    <label for="email" class="text--dark font-semibold">Email *</label>
                                    <input type="text" placeholder="Enter recipient email" 
                                    class="form-control" v-model="remail">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <label for="description" class="text--dark font-semibold">Recipient streaming service *</label>
                                    <select class="form-select" aria-label="RSS select" v-model="provider">
                                        <option selected value="init" class="text-grey">Select a provider</option>
                                        <option  v-for="option in providerOptions" :value="option.title" :key="option.title">
                                            {{option.title}}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="dDate" class="text--dark font-semibold">Delivery date *</label>
                                    <input type="date" class="form-control"  v-model="dDate">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-2 d-flex justify-end">
                        <button class="bg--primary text--dark btn" type="submit" @click="Submit" :disabled="message == 'Success' ? true : false" v-html="message == 'Success' ? 'Loading..' : 'Submit'">Submit</button>
                    </div>
                    <div v-show="message != null" :class="message == 'Success' ? 'alert alert-success' : 'alert alert-danger'">
                        <p :class="message == 'Success' ? 'text-success' : 'text-danger'">{{message}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import imageUpload from './image-upload.vue'
import moment from 'moment';
export default {
  components: { imageUpload },
    name: 'd-gift',
    data(){
        return{
            pname: null,
            psize: null,
            remarks: null, 
            description: null,
            recipient: null,
            rname: null,
            remail: null,
            fname: null,
            femail: null,
            provider: 'init',
            providerOptions: [
                {title: 'Apple music'},
                {title: 'Spotify'},
                {title: 'Youtube music'},
            ],
            dDate: moment().format('YYYY-MM-DD'),
            message: null
        }
    },

    methods:{
        Submit(){
            if (this.pname == null || this.psize == null || this.description == null || this.recipient == null || this.provider == 'init'){
                this.message = "One or more fields are empty"
            }else{
                if (this.fname == null || this.femail == null &&  this.recipient == 'Self')
                    this.message = "Your name and email fields cannot be empty"
                else{
                    /*if (this.recipient == 'Others' && this.fname == null || this.femail==null || this.rname == null || this.remail == null)
                            this.message = "Some fields in playlist recipient are empty"
                    else{*/
                        if(this.dDate == moment().format('YYYY-MM-DD'))
                            this.message = "Deliveries takes up to 24 hours"
                        else{
                            if (this.psize > 16 || isNaN(this.psize))
                                this.message = "Playlist items cannot be more than 16"
                            else{
                                this.message = "Success"
                            }
                        }
                    //}
                }
            }   

            setTimeout(() => {
                this.message = null;
            }, 5000);
        }
    }
}
</script>