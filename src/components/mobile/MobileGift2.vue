<template>
    <div :class="checkout==true? 'bg-gray-200':''">
        <div class="ml-3">
            <button @click="goBack" class="btn ps-0 text-dark ml-2 my-3">
                <i class="bi bi-chevron-left mr-2"></i>
                Back
            </button>
        </div>
        <div class="px-3">
            <p class="font-semibold fs-3 text--dark mb-4">Gift playlists</p>
            <p class="text--dark-50">Recipient details</p>
            <hr class="bg--grey-50 mb-3">

            <div class="mb-3">
                <label for="recipient" class="text--dark font-semibold mb-3">Recipient *</label>
                <div class="d-flex">
                    <div class="form-check">
                        <input type="radio" name="recipient" class="form-check-input d-none" id="recipient1" v-model="recipient" value="Self">
                        <label for="recipient1" class="form-check-label btn fs-4" :class="recipient == 'Self' ? 'btn--dark-active' : 'btn--dark-inactive'">
                            <i :class="recipient == 'Self' ? 'ri-user-line' : 'ri-user-fill'"></i>
                            Self
                        </label>
                    </div>
                    <div class="form-check">
                        <input type="radio" name="recipient" class="form-check-input d-none" id="recipient2" v-model="recipient" value="Others">
                        <label for="recipient2" class="form-check-label btn fs-4" :class="recipient == 'Others' ? 'btn--dark-active' : 'btn--dark-inactive'">
                            <i :class="recipient == 'Others' ? 'ri-group-line' : 'ri-group-fill'"></i>
                            Others
                        </label>
                    </div>
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
            <div v-for="error, index in errors" :key="index">
                <div v-show="errors.length != 0" class="alert alert-danger">
                    <p class="text-danger">{{error}}</p>
                </div>
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
            errors: [],
        }
    },
    methods:{
        Submit(){
            if(this.recipient == 'Self'){
                if (!this.bname || !this.bemail ){
                    this.errors.push("Your name and email fields cannot be empty")
                }
                else if (!this.validEmail(this.bemail)) {
                    this.errors.push('Valid email required.');
                }
            }
            else{
                 if (!this.bname || !this.bemail || !this.rname || !this.remail){
                    this.errors.push("Names and emails fields cannot be empty")
                }
                else if (!this.validEmail(this.bemail) || !this.validEmail(this.remail)) {
                    this.errors.push('Valid emails required.');
                }
            }
            if(this.dDate == moment().format('YYYY-MM-DD'))
                this.errors.push("Deliveries takes up to 24 hours");

            if(this.provider == 'init')
                this.errors.push("Select a streaming provider");

            setTimeout(() => {
                this.errors = [];
            }, 5000);

            if (!this.errors.length) {
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
            }  
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        goBack(){
            this.$store.commit('OpenGift1')
        }
    },
    computed:{
        ...mapGetters([
            'checkout'
        ]),
    }
}
</script>
<style scoped>
    .form-control::placeholder {
        color: #c4c4c480;
    }

    .btn--dark-active {
        color: #fff;
        background-color: #2f2e4180;
        border-color: #2f2e41;
    }
    .btn--dark-inactive {
        color: #2f2e41;
        background-color: #fff;
        border-color: #2f2e41;;
    }
</style>