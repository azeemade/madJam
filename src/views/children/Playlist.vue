<template>
    <div>
        <div class="mb-2 ms-3 mt-4">
            <BackButton />
        </div>

        <div class="wrapper">
            <div :style="{'background-image': 'url('+playlist.playlist_image+')'}" class="image-wrapper image-cover"></div>
            <div class="d-flex justify-content-center align-items-center image-cover">
                <img :src="playlist.playlist_image" alt="" class="rounded image" width="246" height="180">
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <p class="ml-4 font-bold text-3xl text--dark">{{playlist.playlist_title}}</p>
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
                        <a @click="ShareLink(playlist.playlist_title, playlist.description)">Share via ...</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ml-4 mt-1">
            <p class="text--grey text-lg">{{playlist.description}}</p>
        </div>
        <div class="ml-4 flex mt-1">
            <p>{{playlist.songs_count}} songs
                <i class="ml-1 bi bi-dot"></i>
            </p>
            <p class="ml-1">Updated {{getDay}} days ago</p>
        </div>

        <div class="my-2 mx-4 alert alert-success" v-show="copy" role="alert">
            Link copied <i class="bi bi-check"></i>
        </div>

        <div class="ml-4 mt-4">
            <p class="text--dark font-semibold text-xl mb-4">Listen on</p>
            <a href="" class="text--dark border--dark text-xs p-2 a_">{{playlist.listen_on}}</a>
        </div>
        <div class="mt-6 ml-4">
            <div class="d-flex mb-2" v-for="(song, index) in songs" :key="index">
                <div class="mr-3">
                    <img :src="playlist.playlist_image" class="rounded song_image" width="56" height="56">
                </div>
                <div>
                    <p class="text--dark text-semibold mb-0">{{song.song_title}}</p>
                    <p class="text--grey text-xs mb-0">{{song.artistes.split(/[ ]+/).join(', ')}}</p>
                </div>
            </div>
        </div>
        <div class="ml-4 my-3 d-flex">
            <p class="text--dark font-semibold text-xl mb-2 mr-3">Tags:</p>
            <div class="flex" v-for="tag, index in getTags" :key="index">
                <router-link :to="'/search?q='+tag" class="mr-2 text-lg">{{tag}}</router-link>
            </div>   
        </div>
        <div class="ml-4 mb-3">
            <p class="text--dark font-bold text-2xl">Related Playlists</p>
            <PlaylistCardCol :playlists="RelatedPlaylists"/>
        </div>
    </div>
</template>
<script>
import * as clipboard from "clipboard-polyfill/text";
import controller from '@/assets/js/controller.js';
import BackButton from '@/components/utils/BackButton.vue';
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
import moment from 'moment'
export default {
    name: 'Playlist',
    components: { BackButton, PlaylistCardCol},
    data(){
        return{
            playlist: {},
            songs: controller.AllSongs(this.$route.params.id),
            copy: false
        }
    },
    methods:{
        getPlaylist(){
            this.playlist = controller.FindPlaylist(this.$route.params.id)
        },
        CopyLink(){
            clipboard.writeText('https://madjam.netlify.app'+this.$route.fullPath);
            this.copy = true
            setTimeout(() => {
                this.copy = false;
            }, 4000);
        },
        ShareLink(title, desc){
            const shareData = {
                title: title,
                text: desc,
                url: 'https://madjam.netlify.app/'+this.$route.fullPath
            }
            navigator.share(shareData)
        }
    },
    computed:{
        getTags(){
            return this.playlist.playlist_tags.split(" ");
        },
        getDay(){ 
            var foo = moment(this.playlist.playlist_date, "DD/MM/YYYY").format("YYYY-MM-DD");
            var datetime = new Date( foo ).getTime();
            var now = new Date().getTime();
            if (datetime < now) {
                var milisec_diff = now - datetime;
            }else{
                var milisec_diff = datetime - now;
            }

            var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
            return days;
        },
        RelatedPlaylists(){
            return controller.RelatedPlaylists(this.playlist.category_id);
        }
    },
    beforeMount(){
        this.getPlaylist()
    },
    /*metaInfo: {
        //return{
        title: `${this.playlist.playlist_title}`,
        meta: [
            { name: 'description', content: `${this.playlist.description}`}, 
            { name: 'keywords', content: 'playlist, apple music, spotify, deezer, youtube, youtube music, listen, curate'+this.getTags}, 
            { property: 'og:title', content: `${this.playlist.playlist_title}` },
            { property: 'og:url', content: 'https://madjam.netlify.app'+this.$route.fullPath },
            { property: 'og:description', content: `${this.playlist.description}`},
            { property: 'twitter:title', content: `${this.playlist.playlist_title}` },
            { property: 'twitter:description', content: `${this.playlist.description}`},
            { property: 'twitter:image:src', content: `${this.playlist.playlist_image}`},
            { property: 'og:image', content: `${this.playlist.playlist_image}`},
        ] 
    }*/
}
</script>
<style scoped>
    .song_image{
        max-height: 56px
    }
    .image-cover{
        height: 252px;
        margin: 0 auto;
        position: absolute;
        width: 100%;
    }
    .image-wrapper{
        -webkit-filter: blur(250px);
        -moz-filter: blur(250px);
        -o-filter: blur(250px);
        -ms-filter: blur(250px);
        filter: blur(250px);
        border-radius: 8px 8px 0px 0px;
        box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);
        width: 100%
    }
    .image{
        box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.1);
        max-height: 180px;
    }
    .wrapper{
        height: 252px;
    }
    .border--dark{
        border: 1px solid #3F3D56;
        border-radius: 4px;
        text-decoration: none;
    }
</style>