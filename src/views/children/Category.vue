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
import moment from 'moment'
export default {
    name: 'Category',
    components: { BackButton},
    data(){
        return{
            category: null
        }
    },
    methods:{
        getCategory(){
            this.category = controller.FindCategory(this.$route.params.cid)
        }
    },
    computed:{
    },
    beforeMount(){
        this.getCategory()
    }
}
</script>
<style scoped>
</style>