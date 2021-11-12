<template>
    <div class="checkout">
        <div>
            <button @click="close" class="btn ps-0 text-dark">
                <i class="bi bi-x"></i>
            </button>
        </div>
        <div class="mx-4">
            <p class="text--dark font-semibold text-xl">My Gift</p>
            <div class="d-flex">
                <div class="mr-3">
                    <img src>
                </div>
                <div>
                    <p class="font-semibold text-lg text-dark">Playlist name</p>
                    <p>Songs count</p>
                    <button>
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="mx-4 mb-3">
            <p class="text--dark font-semibold text-xl">Recipient details</p>
            <p class="">Recipient name</p>
            <p class="font-semibold">Recipient Email</p>
        </div>
        <div class="mx-4 mb-3">
            <p class="text--dark font-semibold text-xl">Payment Method</p>
            <p></p>
        </div>
        <div class="mx-4 mb-3">
            <p class="text--dark font-semibold text-xl">Order Info</p>
            <div class="d-flex justify-content-between">
            <p class="text--grey">Total</p>
            <p class="text--dark">Price</p>
            </div>
        </div>
        <div class="d-flex justify-content-center mx-4">
            <button class="bg--dark text--light btn btn-lg mb-3">Checkout Price</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Checkout',
    methods:{
        close(){
            let boolval = false
            this.$store.commit("OpenModal", boolval)
        }
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
    }
</style>