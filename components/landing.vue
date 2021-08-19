<template>
    <div>
        <div class="d-flex justify-content-center py-16">
            <img src="~/assets/images/undraw_happy_music.png" alt="happy music" width="240" height="209">
        </div>
        <actionsheet />
    </div>
</template>
<script>
import actionsheet from './mobile/landing_actionsheet.vue'
export default {
    name: 'Landing',
    components: { actionsheet, }
}
</script>