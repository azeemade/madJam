<script setup>
import MonthlyPlaylistCard from './MonthlyPlaylistCard.vue'

import { usePlaylistStore } from '../../stores/playlist';

const store = usePlaylistStore();
</script>

<template>
    <div
        class="flex justify-between items-baseline mb-2">
        <p
            class="text-[#3F3D56] font-semibold text-lg">Monthly Playlists</p>
        <div>
            <router-link to="/" class="text-[#3F3D56] underline">see all</router-link>
        </div>
    </div>
    <div class="flex overflow-x-scroll hide-scroll-bar">
        <div class="flex flex-nowrap space-x-4">
            <div 
                class="py-2 w-80"
                v-for="item, index in store.playlists[0].content" 
                :key="index">
            <MonthlyPlaylistCard 
                v-if="item"
                :playlist="item"/>
            </div>
        </div>
    </div>
</template>
