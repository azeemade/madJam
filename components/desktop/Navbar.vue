<template>
    <div class="">
        <div class="justify-content-around d-flex">
            <div class="">
                <logo />
            </div>
            <div class="">
                <NuxtLink to="" class="me-3">
                    Playlists
                </NuxtLink>
                <NuxtLink to="">
                    Playlists
                </NuxtLink>
            </div>
            <div class="">
                <button class="btn">Subscribe</button>
            </div>
        </div>
    </div>
</template>
<script>
import logo from '../logo.vue'
export default {
  components: { logo },
    name: 'Navbar',
}
</script>