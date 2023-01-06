<script setup>
const props = defineProps({
    upcoming: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="w-64 rounded-xl">
        <p class="uppercase text-xs text-[#3f3d56]/50">upcoming</p>
        <p class="text-[#3f3d56]">{{upcoming.title}}</p>
        <div class="bg-[#3f3d56]/50 rounded-lg">
            <div class="p-2">
                <div class="mb-3">
                    <p class="mb-5 flex items-center text-white space-x-3">
                        <i class="ri-calendar-line"></i>
                        {{upcoming.time}}
                    </p>
                    <p class="text-xl text-white">{{upcoming.title}}</p>
                </div>
                <a href="" target="_blank" 
                    class="bg-white text-[#3f3d56] justify-center flex rounded w-25 p-2">Set Reminder</a>
            </div>
            <div class="mt-4 p-3 bg-[#3f3d56]">
                <p class="text-sm text-white">Host - madJam</p>
                <!-- <p class="text-sm text-white">{{upcoming.note}}</p> -->
            </div>
        </div>
    </div>
</template>
<style>
</style>
