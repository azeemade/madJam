<template>
    <div class="--alert shadow rounded border-0" :class="styles.color" role="alert" :style="'border-left:'+styles.border">
        <p class="mb-0">{{message}}</p>
    </div>
</template>
<script>
export default {
    name: 'Error',
    props:{
        alert_type: {
            type: String,
        },
        message: {
            type: String
        }
    },
    computed:{
        styles(){
            if(this.alert_type == "success"){
                const foo = {
                    color: "alert-success",
                    border: "6px solid #b1dfbb"
                }
                return foo
            }
            else if(this.alert_type == "warning"){
                const foo = {
                    color: "alert-warning",
                    border: "6px solid #ffe8a1"
                }
                return foo
            }
            else{
                const foo = {
                    color: "alert-danger",
                    border: "6px solid #f1b0b7"
                }
                return foo
            }
        },
    }
}
</script>
<style scoped>
    .--alert{     
        position: absolute;
        bottom: 8px;
        right: 16px;
        padding: 0.75rem 1.25rem;
        margin-bottom: 1rem;
        border: 0px;
    }
</style>