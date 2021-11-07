<template>
    <div>
        <div class="mobile">
            <div class="px-3">
                
                <BackButton />

                <div class="mt-3 mb-4">
                    <p class="font-semibold fs-3 text--dark">Playlists</p>
                </div>
                <div class="d-flex mb-5">
                    <Searchbar channel="playlist" v-model:search-item="searchItem"/>

                    <div class="dropdown">
                        <button class="btn border ml-2" type="button" id="dropdownMenu"
                        data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-funnel"></i>
                        </button>
                        <ul class="dropdown-menu rounded shadow bg--grey border-0" aria-labelledby="dropdownMenu">
                            <li>
                                <a class="btn text--dark">
                                    Title
                                </a>
                            </li>
                            <li>
                                <a class="btn text--dark">
                                    Recently added
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <PlaylistCardCol :playlists="playlists"/>
                <div ref="formContainer"></div>
                <button class="bg--dark text--light btn-lg w-100 mb-3" @click.prevent="LoadMore">Load more..</button>
            </div>
        </div>

        <div class="desktop">
        </div>
    </div>
</template>
<script>
import {mapGetters} from'vuex'
import controller from '@/assets/js/controller.js'
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
import BackButton from '@/components/utils/BackButton.vue'
import Searchbar from '@/components/utils/Searchbar.vue'
export default {
    components: { BackButton, Searchbar, PlaylistCardCol },
    name: "Playlists",
    data(){
        return{
            searchItem: 'ope',
            playlists: controller.AllPlaylists(0, this.searchItem),
            fullPage: false
        }
    },
    computed:{
        //...mapGetters(['search'])
        /*searchItem(){
            return 'ope'
        }*/
    },
    methods:{
        LoadMore(){
            let loader = this.$loading.show({
                container: this.fullPage ? null : this.$refs.formContainer,
                canCancel: false,
                onCancel: this.onCancel,
                loader: "bars",
            });

            this.playlists = controller.AllPlaylists(10, this.searchItem);

            loader.hide()
        }
    },

}
</script>