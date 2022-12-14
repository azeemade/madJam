<script setup>
    const props = defineProps({
        category: Object
    })
</script>

<template>
    <router-link 
        :to="'/'+category.url">
        <img 
            :src="'/src/assets/images/home/' + category.image_url" 
            :alt="category.title" 
            class="mb-1">
        <p 
            class="uppercase text-xs text-[#3F3D56]">
                {{category.title}}
        </p>
    </router-link>
</template>
