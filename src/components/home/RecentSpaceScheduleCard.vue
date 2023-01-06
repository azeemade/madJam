<script setup>
const props = defineProps({
    recent: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="w-64 rounded-xl">
        <p class="uppercase text-xs text-[#d7c73c]/75">recent</p>
        <p class="text-[#d7c73c]">{{recent.title}}</p>
        <div class="bg-[#d7c73c]/75 rounded-lg">
            <div class="p-2">
                <div class="mb-3">
                    <p class="mb-5 flex items-center text-white space-x-3">
                        <i class="ri-calendar-line"></i>
                        {{recent.time}}
                    </p>
                    <p class="text-xl text-white">{{recent.title}}</p>
                </div>
                <a href="" target="_blank" 
                    class="bg-white text-[#d7c73c] justify-center flex rounded w-25 p-2">Play Recording</a>
            </div>
            <div class="mt-4 p-3 bg-[#d7c73c]">
                <p class="text-sm text-white">Host - madJam</p>
                <!-- <p class="text-sm text-white">{{recent.note}}</p> -->
            </div>
        </div>
    </div>
</template>
<style>
</style>
