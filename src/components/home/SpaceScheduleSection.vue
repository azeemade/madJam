<script setup>
import RecentSpaceScheduleCard from './RecentSpaceScheduleCard.vue'
import UpcomingpaceScheduleCard from './UpcomingSpaceScheduleCard.vue'

import { useSpacesStore } from '../../stores/spaces';

const store = useSpacesStore();
</script>

<template>
    <p class="mb-3 text-[#3F3D56] font-semibold text-lg">Space Schedules</p>
    <div class=" flex overflow-x-scroll hide-scroll-bar ">
        <div class="flex flex-nowrap space-x-4">
            <div>
                <UpcomingpaceScheduleCard :upcoming="store.spaces[0].content.upcoming" />
            </div>
            <div>
                <RecentSpaceScheduleCard :recent="store.spaces[0].content.recent" />
            </div>
        </div>
    </div>
</template>
<style>
</style>
