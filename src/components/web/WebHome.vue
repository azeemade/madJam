<template>
    <div>
        <div class="mb-9">
            <p class="mb-8 text--dark font-bold font-2xl">Gift playlist</p>
            <div class="rounded-lg bg--light">
                <p class="pt-7 mb-3.5 text-4xl text--dark pl-14">Get a custom made playlist <br> for you or that special someone today</p>
                <div class="d-flex justify-end pb-4 pr-14">
                    <router-link to="/gift" class="btn text--dark bg--primary">Gift playlist</router-link>
                </div>
            </div>
        </div>
        <div>
            <p class="mb-8 text--dark font-bold font-2xl">For you</p>
            <PlaylistCardCol  :data="_data"/>
        </div>
        <div>
            <p class="mb-8 text--dark font-bold font-2xl">Popular playlist</p>
            <PlaylistCardCol  :data="_data"/>
        </div>
        <div>
            <div class="mb-8 d-flex justify-between">
                <p class="text--dark font-bold font-2xl">Categories</p>
                <router-link to="/categories" class="text--dark font-bold text-decorate-underline">view all</router-link>
            </div>
            <CategoryCardCol :data="category" />
        </div>
    </div>    
</template>
<script>
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
import CategoryCardCol from '@/components/utils/CategoryCardCol.vue'
export default {
  components: { PlaylistCardCol, CategoryCardCol },
    name: 'WebHome',
    data(){
        return{
            _data: [],
            category: null
        }
    },

}
</script>