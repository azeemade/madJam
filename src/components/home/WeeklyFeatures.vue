<script setup>
import DropdownMenu from './DropdownMenu.vue'
import WeeklyFeatureCard from './WeeklyFeatureCard.vue'

import { useFeaturesStore } from '../../stores/features';

const store = useFeaturesStore();
</script>

<template>
    <div
        class="flex justify-between items-baseline mb-2">
        <p
            class="text-[#3F3D56] font-semibold text-lg">Weekly Features</p>
        <div>
            <button 
                id="dropdownMenuIconButton" 
                data-dropdown-toggle="dropdownDots" 
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 
                    bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white 
                    focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                type="button"> 
                <i class="ri-more-2-fill"></i>
            </button>

            <!-- Dropdown menu -->
            <DropdownMenu />
        </div>
    </div>
    <div
        class="mb-4">
        <p
            class="text-[#3f3d56]">{{store.features[0].content.featureName}}</p>
        <p
            class="text-xs text-[#3f3d56]/50">{{store.features[0].content.topArtists.join(", ")}}</p>
    </div>
    <div class="grid grid-cols-1 divide-y">
        <div 
            class="py-2"
            v-for="item, index in store.features[0].content.content.slice(0, 5)" 
            :key="index">
                <WeeklyFeatureCard 
                    v-if="item"
                    :song="item"/>
        </div>
        <router-link
            to="/"
            class="rounded-b-lg py-2 text-center shadow text-[#3f3d56] w-full">
            View More
        </router-link>
    </div>
</template>
