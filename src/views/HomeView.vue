<script setup>
import { reactive, onMounted } from 'vue'

import Banner from '../components/home/Banner.vue'
import Searchbar from '../components/home/Searchbar.vue'
import CategorySection from '../components/home/CategorySection.vue'
import WeeklyFeatures from '../components/home/WeeklyFeatures.vue'
import MonthlyPlaylistSection from '../components/home/MonthlyPlaylistSection.vue'
import Newsletter from '../components/home/Newsletter.vue'
import SpaceScheduleSection from '../components/home/SpaceScheduleSection.vue'
import GiftPlaylist from '../components/home/GiftPlaylist.vue'
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

  <!-- playlist category section -->
  <div
    class="mb-6">
    <CategorySection />
  </div>

  <!-- weekly features section -->
  <div class="mb-8">
    <WeeklyFeatures />
  </div>

  <!-- Newsletter -->
  <div class="mb-8">
    <Newsletter />
  </div>

  <!-- monthly playlists section -->
  <div class="mb-8">
    <MonthlyPlaylistSection />
  </div>

  <!-- space schedules section -->
  <div class="mb-6">
    <SpaceScheduleSection />
  </div>

  <!-- Gift playlist section -->
  <div class="mb-3">
    <GiftPlaylist />
  </div>
</template>

<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>