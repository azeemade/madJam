<template>
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0 bg--primary">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close text--dark" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-4">
                            <p class="font-semibold text-3xl text--dark mb-3">Join our subscribers list</p>
                            <p class="">
                                Be the first to know about our new playlists and 
                                latest additions to our existing playlists for free.
                            </p>
                        </div>
                        <div class="input-group has-icon">
                            <span class="form-control-feedback">
                                <i class="bi bi-envelope text--dark-50"></i>
                            </span>
                            <input type="text" placeholder="Enter your email address" 
                            class="form-control searchbar" aria-label="Email address"
                            aria-describedby="join-addon">
                            <button class="text--primary bg--dark btn modal-btn" id="join-addon">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        
        
    </div>
</template>
<script>
export default {
    name: 'SubscribeModal',
}
</script>