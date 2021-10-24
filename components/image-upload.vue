<template>
    <div v-if="preview == null" class="d-grid justify-center">
        <div class="d-flex justify-center">
            <img :src="cover" width="115" height="115" onerror="arguments[0].currentTarget.style.display='none'" />
        </div>
        <div>
            <label for="file" class="btn">
                <input type="file" id="file" name="masterImage" autocomplete="off" class="hidden" @change="attach_image">
                <a class="text-center mt-4 text-primary small">Change playlist cover</a>
            </label>
        </div>
    </div>
    <div v-else  class="d-grid justify-center">
        <div class="d-flex justify-center">
            <img :src="preview" width="115" height="115" alt=" "/>
        </div>
        <div>
            <label for="file"  class="btn">
                <input type="file" id="file" name="masterImage" autocomplete="off" class="hidden" @change="attach_image">
                <a class="text-center mt-4 text-primary small">Change playlist cover</a>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'image-upload',
    data(){
        return{
           cover: require('@/assets/images/madJam cover.png'),
           preview: null
        }
    },
    methods: {
        attach_image(e) {
            var cover = e.target.files[0]
            this.$store.commit('SET_MASTER_IMAGE', cover)
            console.log(cover)

            this.createImage(cover);
        },
        createImage(cover) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.preview = e.target.result;
            };

            reader.readAsDataURL(cover);
        },
    },
}
</script>
<style>
</style>