<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/home/Navbar.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <header>
    <Navbar />
  </header>
  <main class="px-4">
    <RouterView />    
  </main>
</template>