<template>
    <div>
        <div class="mb-2 ms-3 mt-4">
            <BackButton />
        </div>

    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
import BackButton from '@/components/utils/BackButton.vue';
export default {
    name: 'Contribute',
    components: { BackButton},
    data(){
        return{
        }
    },
    methods:{
        getCategory(){
        }
    },
    computed:{
    },
    beforeMount(){
    }
}
</script>
<style scoped>
</style>