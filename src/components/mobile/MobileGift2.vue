<template>
    <div :class="checkout==true? opac:''">
        <div>
            <button @click="goBack" class="btn ps-0 text-dark">
                <i class="bi bi-chevron-left mr-2"></i>
                Back
            </button>
        </div>
        <div class="px-3">
            <p class="font-semibold fs-3 text--dark mb-4">Gift playlists</p>
            <p class="text--dark-50">Recipient details</p>
            <hr class="bg--grey-50 mb-3">

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
            <div class="mb-3">
                <label for="rname" class="text--dark font-semibold" v-html="recipient == 'Self'? 'Name *': 'From *'"></label>
                <input type="text" placeholder="Enter your name" 
                    class="form-control" v-model="bname">
            </div>
            <div class="mb-3">
                <label for="email" class="text--dark font-semibold">Email *</label>
                <input type="text" placeholder="Enter your email" 
                class="form-control" v-model="bemail">
            </div>
            <div v-show="recipient != 'Self'">
                <div class="mb-3">
                    <label for="rname" class="text--dark font-semibold">To *</label>
                    <input type="text" placeholder="Enter recipient name" 
                    class="form-control" v-model="rname">
                </div>
                <div class="mb-3">
                    <label for="email" class="text--dark font-semibold">Email *</label>
                    <input type="text" placeholder="Enter recipient email" 
                    class="form-control" v-model="remail">
                </div>
            </div>
            <div class="mb-3">
                <label for="description" class="text--dark font-semibold">Recipient streaming service *</label>
                <select class="form-select" aria-label="RSS select" v-model="provider">
                    <option selected value="init" class="text-grey">Select a provider</option>
                    <option  v-for="option in providerOptions" :value="option.title" :key="option.title">
                        {{option.title}}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="dDate" class="text--dark font-semibold">Delivery date *</label>
                <input type="date" class="form-control"  v-model="dDate">
            </div>
            <button class="bg--dark text--light btn btn-lg w-100 mb-3" @click="Submit">Continue</button>
             <div v-show="message != null" :class="message == 'Success' ? 'alert alert-success' : 'alert alert-danger'">
                <p :class="message == 'Success' ? 'text-success' : 'text-danger'">{{message}}</p>
            </div>
        </div>
    </div>
    <div v-show="checkout">
        <Checkout />
    </div>
</template>
<script>
import BackButton from '@/components/utils/BackButton.vue'
import Checkout from '@/components/utils/Checkout.vue'
import {mapGetters} from 'vuex'
import moment from 'moment'
export default {
    name: 'MobileGift2',
    components: { BackButton, Checkout },
    data(){
        return{
            recipient: null,
            rname: null,
            remail: null,
            bname: null,
            bemail: null,
            provider: 'init',
            providerOptions: [
                {title: 'Apple music'},
                {title: 'Spotify'},
                {title: 'Youtube music'},
            ],
            dDate: moment().format('YYYY-MM-DD'),
            message: null,
        }
    },
    methods:{
        Submit(){
            const gift = {
                recipient: this.recipient,
                r_name: this.rname,
                r_email: this.remail,
                b_name: this.bname,
                b_email: this.bemail,
                provider: this.provider
            }
            this.$store.commit('UpdateGift', gift)
            let boolval = true;
            this.$store.commit('OpenModal', boolval)

            
            /*if(this.recipient == 'Self'){
                if (this.bname == null || this.bemail == null){
                    this.message = "Your name and email fields cannot be empty"
                }
            }
            else{
                 if (this.bname == null || this.bemail == null || this.rname == null || this.remail == null){
                    this.message = "Names and emails fields cannot be empty"
                }
            }*/

            /*if (this.bname == null || this.bemail == null &&  this.recipient == 'Self'){
                    this.message = "Your name and email fields cannot be empty"
            }
                else{
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
                }   */

            setTimeout(() => {
                this.message = null;
            }, 5000);
        },
        goBack(){
            this.$store.commit('OpenGift1')
        }
    },
    computed:{
        ...mapGetters([
            'checkout'
        ])
    }
}
</script>
<style scoped>
    .form-control::placeholder {
        color: #c4c4c480;
    }
    .opac{
        background-color: rgba(0,0,0,0.4);
    }
</style>