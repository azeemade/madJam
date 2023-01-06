<script setup>

</script>

<template>
    <div class="px-6 py-3 shadow-sm rounded">
        <div class="flex space-x-4 mb-4">
            <div>
                <img src="../../assets/images/home/email-pic.png" alt="" class="">
            </div>
            <div>
                <p class="text-[#3f3d56]">Stay in the loop !</p>
                <p class="text-[#3f3d56]/50 text-xs">Dont miss out on out weekly newsletter that drops every thursday.</p>
            </div>
        </div>
        <div class="">
            <input 
                type="text" 
                name="subscribe-email" 
                class="py-1 w-11/12 placeholder:text-[#3f3d56] placeholder:text-xs border-0 border-b border-[#3f3d56]/50"
                placeholder="Enter your email">
            <button class="p-1 text-[#3f3d56] border-b border-[#3f3d56]/50" type="submit">
                <i class="ri-arrow-right-up-line"></i>
            </button>
        </div>
    </div>
</template>
