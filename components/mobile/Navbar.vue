<template>
    <nav class="fixed-top d-flex justify-content-between align-items-center bg--light">
        <div class="pt-2">
            <button class="btn" data-bs-toggle="modal" data-bs-target="#mobileModal">
                <i class="bi bi-justify-left"></i>
            </button>
        </div>
        <div class="d-flex justify-content-center">
            <img src="../../assets/images/madjam.png" alt="madJam logo" width="32" height="22">
        </div>
        <div></div>
    </nav>
</template>
<script>
import mobilesidebar from './sidebar.vue'
export default {
  components: { mobilesidebar },
    name: 'mobileNavbar',
}
</script>