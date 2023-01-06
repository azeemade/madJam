<script setup>
import { reactive, onMounted } from 'vue'
    const props = defineProps({
        playlist: Object
    })

const state = reactive({cover: ""})

const getImage = () => {
    fetch('https://open.spotify.com/oembed?url='+props.playlist.spotify)
    .then((response) => response.json())
    .then((data) => {
       state.cover =  data.thumbnail_url;
    });
}

onMounted(() => {
    getImage()
})
</script>

<template>
    <router-link 
        to="/">
        <!-- :to="'/'+playlist.playlistTitle.replace(' ', '-')"> -->
        <div class="flex space-x-3 p-2 rounded shadow">
            <div class="">
                <img 
                    :src="state.cover" 
                    :alt="playlist.playlistTitle" 
                    class="rounded h-24 w-full">
            </div>
            <div>
                <p class="text-[#3f3d56] font-medium">{{playlist.title}}</p>
                <!-- <p class="text-xs text-[#3f3d56]/50 last-line overflow-hidden w-[270px]">{{playlist.topArtists.join(", ")}}</p> -->
                <!-- <p class="text-[#3f3d56]">{{playlist.description}}</p> -->
                <div class="flex flex-col space-y-3">
                    <p class="text-[#3f3d56]">{{playlist.size}} songs</p>
                    <div
                        class="flex space-x-2">
                        <a 
                            target="_blank"
                            class="p-0.5 text-xs text-[#3f3d56]/50 flex items-center bg-gray-100 rounded"
                            :href="playlist.appleMusic">
                            <i 
                                class="ri-apple-line"></i> Music
                        </a>
                        <a 
                            target="_blank"
                            class="p-0.5 text-xs text-[#3f3d56]/50 flex items-center bg-gray-100 rounded"
                            :href="playlist.spotify">
                            <i class="ri-spotify-line"></i> Spotify
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<style scoped>
.last-line {
  height: 2.4em; /* exactly three lines */
  text-overflow: ellipsis;
}
</style>