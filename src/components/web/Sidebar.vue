<template>
    <div class="w-48 h-100 fixed-top bg--light z--index">
        <p class="text--dark fs-4 font-bold mb-5 text-center mt-3">madJam</p>
            <ul class="px-3">
                <li class="mb-3">
                    <router-link to="/home" class="p-2 rounded-md">
                        <i class="bi bi-house mr-5"></i>
                        Home
                    </router-link >
                </li>
                <li>
                    <router-link to="/browse" class="p-2 rounded-md">
                        <i class="bi bi-grid mr-5"></i>
                        Browse
                    </router-link>
                </li>
                <hr class="my-9 px-2 bg--dark-50">
                <li class="mb-3">
                    <button class="p-2 rounded-md" data-bs-toggle="modal" data-bs-target="#subscribeModal">
                        <i class="bi bi-envelope-open mr-5"></i>
                        Subscribe
                    </button>
                </li>
                <li>
                    <button class="p-2 rounded-md" data-bs-toggle="modal" data-bs-target="#contributeModal">
                        <i class="bi bi-inbox mr-5"></i>
                        Contribute
                    </button>
                </li>
                <hr class="my-9 px-2 bg--dark-50">
                <li class="mb-3">
                    <router-link to="/gift" class="p-2 rounded-md">
                        <i class="bi bi-gift mr-5"></i>
                        Gift playlist
                    </router-link>
                </li>
            </ul>
            <Subscribe />
            <Contribute />
    </div>
</template>
<script>
import Contribute from '@/components/web/Contribute.vue'
import Subscribe from '@/components/web/Subscribe.vue'
export default {
  components: { Subscribe, Contribute },
    name: 'WebSidebar'
}
</script>
<style scoped>
    /*.router-link-exact-active {
        background-color: #b6c9da80;
    }*/
</style>