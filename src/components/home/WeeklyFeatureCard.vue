<script setup>
import { onMounted, reactive, ref  } from 'vue';
    const props = defineProps({
        song: Object
    })

    const state = reactive({img: ""})

    const getImage = () => {
        fetch('https://open.spotify.com/oembed?url='+props.song.spotify)
        .then((response) => response.json())
        .then((data) => {
           state.img =  data.thumbnail_url;
        });
    }
    
    onMounted(() => {
        getImage()
    })
</script>

<template>
    <div>
        <div 
            class="">
            <div 
                class="flex space-x-2">
                <div class="song-cover">
                    <img 
                        class="song-cover"
                        :src="state.img" 
                        alt="cover image">
                </div>
                <div>
                    <div>
                        <p 
                            class="text-[#3f3d56] text-ellipsis overflow-hidden whitespace-nowrap w-[70vw]" 
                            :title="song.title">{{song.title}}</p>
                        <p 
                            class="text-[#3f3d56]/50 text-sm">{{song.artistName}}</p>
                        <!-- <p 
                            class="text-[#3f3d56]/50 text-xs">{{song.description}}</p> -->
                    </div>
                    
                    <div
                        class="flex space-x-2">
                        <a 
                            target="_blank"
                            class="p-0.5 text-xs text-[#3f3d56]/50 flex items-center bg-gray-100 rounded"
                            :href="song.appleMusic">
                            <i 
                                class="ri-apple-line"></i> Music
                        </a>
                        <a 
                            target="_blank"
                            class="p-0.5 text-xs text-[#3f3d56]/50 flex items-center bg-gray-100 rounded"
                            :href="song.spotify">
                            <i class="ri-spotify-line"></i> Spotify
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
