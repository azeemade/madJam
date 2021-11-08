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
                        <ul class="dropdown-menu rounded shadow border-0" aria-labelledby="dropdownMenu">
                            <li v-for="(val, index) in FilterBy" :key="index" class="align-items-baseline flex" :class="FilterValue == val ? 'text--primary': ''">
                                <input type="radio" :id="index" :value="val" v-model="FilterValue" class="d-none">
                                <i class="bi bi-check-lg ms-2" v-show="FilterValue == val"></i>
                                <label :for="index" class="btn" :class="FilterValue == val ? 'fw-bold text--primary': 'text--dark'">{{val}}</label>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <PlaylistCardCol :playlists="SearchPlaylists"/>
                <div ref="formContainer"></div>
                <button class="bg--dark text--light btn-lg w-100 mb-3" @click.prevent="LoadMore(10)">Load more..</button>
            </div>
        </div>

        <div class="desktop">
        </div>
    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
import BackButton from '@/components/utils/BackButton.vue'
import Searchbar from '@/components/utils/Searchbar.vue'
export default {
    components: { BackButton, Searchbar, PlaylistCardCol },
    name: "Playlists",
    data(){
        return{
            searchItem: '',
            playlists: controller.AllPlaylists(),
            fullPage: false,
            paginate: 10,
            FilterBy: ['Title', 'Recently added'],
            FilterValue: ''
        }
    },
    computed:{
        SearchPlaylists(){
            var search = this.playlists.filter(a => {
                return a.playlist_title.toLowerCase().includes(this.searchItem.toLowerCase())
            }).slice(0,this.paginate);

            if(this.FilterValue == 'Title'){
                return search.sort((a,b) => {
                    let fa = a.playlist_title.toLowerCase(), fb = b.playlist_title.toLowerCase();
                    if (fa < fb) {return -1;}
                    if (fa > fb) {return 1;}
                    return 0;
                })
            }
            else if(this.FilterValue == 'Recently added'){
                return search.sort(function(a, b){
                var foo = moment(a.playlist_date, "DD/MM/YYYY").format("YYYY-MM-DD");
                var bar = moment(b.playlist_date, "DD/MM/YYYY").format("YYYY-MM-DD");

                    return new Date( bar ) - new Date( foo )
                });
            }
            else{
                return search;
            }
        }
    },
    methods:{
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
    /*metaInfo: {
        title: 'Playlists',
        meta: [
        { name: 'description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.'}, 
        { property: 'og:title', content: 'Playlists' },
        { property: 'og:url', content: 'https://madjam.netlify.app/Playlists' },
        { property: 'og:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        { property: 'twitter:title', content: 'Playlists' },
        { property: 'twitter:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
      ]
    }*/

}
</script>