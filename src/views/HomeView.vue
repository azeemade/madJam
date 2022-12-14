<script setup>
import { reactive } from 'vue'

import Banner from '../components/home/Banner.vue'
import Searchbar from '../components/home/Searchbar.vue'
import CategoryCard from '../components/home/CategoryCard.vue'
import WeeklyFeatureCard from '../components/home/WeeklyFeatureCard.vue'

import { categories, weekly } from '../assets/js/controller'

const state = reactive({
  categories:categories,
  weekly: weekly
})
</script>

<template>
  <div 
    class="mb-2">
      <Banner />
  </div>

  <div 
    class="mb-7">
      <Searchbar />
  </div>

  <div
    class="mb-6">
    <div 
      class="flex justify-between">
        <div 
          v-for="(category, index) in state.categories" 
          :key="index">
          <CategoryCard 
            :category="category" />
        </div>
    </div>
  </div>

  <div>
    <div
      class="flex justify-between mb-2">
      <p
        class="text-[#3F3D56] font-semibold text-lg">Weekly Features</p>
      <div
        class="flex space-x-3">
        <a :href="weekly.appleMusic">
          <i></i>
        </a>
        <a :href="weekly.spotify">
          <i></i>
        </a>
      </div>
    </div>
    <div
      class="mb-4">
      <p
        class="text-[#3f3d56]">{{weekly.featureName}}</p>
      <p
        class="text-xs text-[#3f3d56]/50">{{weekly.topArtists.join(", ")}}</p>
    </div>
    <div class="grid grid-cols-1 divide-y">
      <div 
        class="py-2"
        v-for="item, index in weekly.content" 
        :key="index">
        <WeeklyFeatureCard 
        v-if="item"
        :song="item"/>
      </div>
    </div>
  </div>
</template>
