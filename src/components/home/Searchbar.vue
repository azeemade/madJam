<script setup>
import { ref } from 'vue'
const search = ref('')
</script>

<template>
    <div>
        <form action="" method="post">
            <input type="search" name="search" v-model="search" placeholder="Search for playlist"
                class="border-b border-0 rounded border-[#91909D] w-full text-[#3F3D56] placeholder:text-sm">
        </form>
    </div>
</template>
