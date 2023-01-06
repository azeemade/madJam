<script setup>
</script>

<template>
    <div class="gift-background rounded-lg h-28 flex space-x-6 pl-6 pr-2 py-3">
        <div class="flex items-end">
            <img src="../../assets/images/home/icon.png" alt="">
        </div>
        <div>
            <p class="text-[#3f3d56] text-xl">Gift Playlist</p>
            <p class="text-xs text-[#3f3d56]/50">Request playlist for self or special someone</p>
            <router-link 
                to="/request-playlist"
                class="underline text-[#3f3d56]"
            >Request now!</router-link>
        </div>
    </div>
</template>
<style>
    .gift-background{
        background: url(../../assets/images/home/gift-background.png);
    }
</style>