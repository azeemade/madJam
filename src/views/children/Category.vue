<template>
    <div>
        <div class="mb-2 ms-3 mt-4">
            <BackButton />
        </div>
        <div class="d-flex justify-content-center">
            <img :src="category.image" :alt="category.category_title+' image'" class="rounded" width="246" height="180">
        </div>
        <div class="d-flex justify-content-between">
            <p class="ml-4 font-bold text-3xl text--dark">{{category.category_title}}</p>
            <div class="dropdown mr-4">
                <button class="btn border" type="button" id="dropdownMenu"
                data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-three-dots-vertical"></i>
                </button>
                <ul class="dropdown-menu rounded shadow border-0" aria-labelledby="dropdownMenu">
                    <li class="align-items-baseline flex justify-content-between p-3">
                        <a @click="CopyLink">Copy link</a>
                        <i class="bi bi-clipboard"></i>
                    </li>
                    <li class="align-items-baseline flex justify-content-between desktop p-3">
                        <a target="_blank" class="" rel="noopener" :href="'https://www.facebook.com/sharer.php?u=https://madJam.netlify.app'+$route.fullPath">
                            Share to Facebook
                        </a>
                        <i class="bi bi-facebook"></i>
                    </li>
                    <li class="align-items-baseline flex justify-content-between desktop p-3">
                        <a target="_blank" class="" rel="noopener" :href="'https://twitter.com/intent/tweet?text=Share+Text&amp;url=https://madjam.netlify.app'+$route.fullPath">
                            Share on Twitter
                        </a>
                        <i class="bi bi-twitter"></i>
                    </li>
                    <li class="p-3">
                        <a @click="ShareLink(category.category_title)">Share via ...</a>
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="ml-4 my-3 d-flex">
            <p class="text--dark font-semibold text-xl mb-2 mr-3">Tags:</p>
            <div class="flex" v-for="tag, index in getTags" :key="index">
                <router-link to="" class="mr-2 text-lg">{{tag}}</router-link>
            </div>   
        </div>

        <div class="my-2 mx-4 alert alert-success" v-show="copy" role="alert">
            Link copied <i class="bi bi-check"></i>
        </div>

        <div class="mt-4 ml-4">
            <PlaylistCardCol :playlists="playlists" />
        </div>
        <div ref="formContainer"></div>
        <div class="mx-4">
            <button class="bg--dark text--light btn-lg w-100 mb-3" @click="LoadMore(6)">Load more..</button>
        </div>
        <!--<div class="ml-4 mt-3">
            <p class="text--dark font-bold text-2xl">Related Categories</p>
            <CategoryCard :categories="RelatedCategories"/>
        </div>-->
    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
import BackButton from '@/components/utils/BackButton.vue'
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
export default {
    name: 'Category',
    components: { BackButton, PlaylistCardCol},
    data(){
        return{
            category: {},
            copy: false,
            paginate: 6
        }
    },
    methods:{
        getCategory(){
            this.category = controller.FindCategory(this.$route.params.id)
        },
        CopyLink(){
            clipboard.writeText('https://madjam.netlify.app'+this.$route.fullPath);
            this.copy = true
            setTimeout(() => {
                this.copy = false;
            }, 4000);
        },
        ShareLink(title){
            const shareData = {
                title: 'Checkout this '+title+' playlists category',
                url: 'https://madjam.netlify.app/'+this.$route.fullPath
            }
            navigator.share(shareData)
        },
        LoadMore(n){
            let loader = this.$loading.show({
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: false,
                onCancel: this.onCancel,
                loader: "bars",
            });

            this.paginate += n

            loader.hide()
        }
    },
    computed:{
        getTags(){
            return this.category.tags.split(" ");
        },
        playlists(){
            return controller.GetPlaylists(this.$route.params.id).slice(0,this.paginate)
        },
        /*RelatedCategories(){
            return controller.RelatedCategories(this.category.category_id).slice(0,2);
        }*/
    },
    beforeMount(){
        this.getCategory()
    }
}
</script>
<style scoped>
</style>