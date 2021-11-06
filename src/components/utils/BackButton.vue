<template>
    <div>
        <button @click="goBack" class="btn ps-0">
            <i class="bi bi-chevron-left text--dark"></i>
        </button>
    </div>
</template>
<script>
export default {
  components: {  },
    name: 'BackButton',
    data(){
        return{
            
        }
    },

    methods: {
        goBack(){
            window.history.back()
        }
    }
}
</script>