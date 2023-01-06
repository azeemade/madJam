<script setup>
import CategoryCard from './CategoryCard.vue'

import { useCategoryStore } from '../../stores/category';

const store = useCategoryStore();
</script>

<template>
    <div 
        class="flex justify-between">
        <div 
            v-for="(category, index) in store.categories[0].content" 
            :key="index">
            <CategoryCard 
                :category="category" />
        </div>
    </div>
</template>
