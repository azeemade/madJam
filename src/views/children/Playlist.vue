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
        <div class="ml-4">
            <p class="font-bold text-3xl text--dark">{{playlist.playlist_title}}</p>
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
        <div class="ml-4 mt-4">
            <p class="text--dark font-semibold text-xl mb-4">Listen on</p>
            <a href="" class="text--dark border--dark text-xs p-2 a_">{{playlist.listen_on}}</a>
        </div>
        <div class="mt-6 ml-4">
            <div class="d-flex mb-2" v-for="(song, index) in songs" :key="index">
                <div class="mr-3">
                    <img :src="playlist.playlist_image" class="rounded song_image" width="40" height="40">
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
                <router-link to="" class="mr-2 text-lg">{{tag}}</router-link>
            </div>
            
        </div>
    </div>
</template>
<script>
import controller from '@/assets/js/controller.js'
import BackButton from '@/components/utils/BackButton.vue';
import moment from 'moment'
export default {
    name: 'Playlist',
    components: { BackButton},
    data(){
        return{
            playlist: null,
            songs: controller.AllSongs(this.$route.params.id)
        }
    },
    methods:{
        getPlaylist(){
            this.playlist = controller.FindPlaylist(this.$route.params.id)
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
    },
    beforeMount(){
        this.getPlaylist()
    }
}
</script>
<style scoped>
    .song_image{
        max-height: 40px
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