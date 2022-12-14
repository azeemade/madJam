<script setup>
import NavbarItems from './NavbarItems.vue'
</script>

<template>
  <nav class="p-4 flex items-center justify-between">
    <div>
        <img src="../../assets/images/madjam.png" alt="madJam logo" />
    </div>
    <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-[#3F3D56] rounded-lg md:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </nav>
  <NavbarItems />
</template>