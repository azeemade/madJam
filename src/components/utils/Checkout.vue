<template>
    <div class="checkout shadow">
        <div class="ml-3 my-2">
            <button @click="close" class="btn ps-0 text-danger">
                <i class="bi bi-x text-2xl"></i>
            </button>
        </div>
        <div class="mx-4 mb-5">
            <p class="text--dark font-semibold text-xl mb-2">My Gift</p>
            <div class="d-flex bg--light rounded p-2 justify-content-between">
                <div class="d-flex">
                    <div class="mr-3">
                        <div class="playlists-image rounded-lg" :style="{'background-image': 'url('+gift.cover+')'}" :title="gift.name"></div>
                    </div>
                    <div>
                        <p class="font-semibold text-lg text-dark mb-1">{{gift.name}}</p>
                        <p class="text--dark-50 mb-0">{{gift.size}} songs</p>
                    </div>
                </div>
                <div class="">
                    <button @click="goHome">
                        <i class="bi bi-trash text-danger text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="mx-4 mb-5">
            <p class="text--dark font-semibold text-xl mb-2">Recipient details</p>
            <div class=" d-flex bg--light rounded p-2">
                <div class="mr-3">
                    <img :src="'https://api.multiavatar.com/'+recipient_name+'.png'" alt="avatar" width="72" height="72">
                </div>
                <div>
                    <p class="font-semibold text--dark mb-1" v-html="recipient_name"></p>
                    <p class="mb-0 text--dark-50" v-html="recipient_email"></p>
                </div>
            </div>
        </div>
        <div class="mx-4 mb-5">
            <p class="text--dark font-semibold text-xl">Payment Method</p>
            <p></p>
        </div>
        <div class="mx-4">
            <p class="text--dark font-semibold text-xl mb-2">Order Info</p>
            <div class="d-flex justify-content-between py-4 px-3 bg--light rounded shadow-sm">
                <p class="text--dark-50">Total</p>
                <p class="text--dark font-semibold">{{Price}}</p>
            </div>
        </div>
        <div class="d-flex justify-content-center mx-4 my-3">
            <button class="bg--dark text--light btn btn-lg mb-3">Checkout {{Price}}</button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Checkout',
    methods:{
        close(){
            let boolval = false
            this.$store.commit("OpenModal", boolval)
        },
        goHome(){
            this.$router.push('/home')
        }
    },
    computed:{
        ...mapGetters([
            'gift'
        ]),
        Price(){
            var price = this.gift.size <= 10 ? 'NGN 1,500' : 'NGN 3,000';
            return price;
        },
        recipient_name(){
            var name = this.gift.recipient == 'Self'? this.gift.b_name : this.gift.r_name;
            return name;
        },
        recipient_email(){
            var email = this.gift.recipient == 'Self'? this.gift.b_email : this.gift.r_email;
            return email;
        },
    }
}
</script>
<style scoped>
    .checkout{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1099;
        background: white;
        right: 0;
        border-radius: 16px 16px 0px 0px;
        height: 560px;
        overflow: scroll;
    }
</style>