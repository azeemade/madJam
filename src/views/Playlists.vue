<template>
    <div>
        <div class="mobile">
            <div class="px-3">
                
                <BackButton />

                <div class="mt-3 mb-4">
                    <p class="font-semibold fs-3 text--dark">Playlists</p>
                </div>
                <div class="d-flex mb-5">
                    <Searchbar  channel="playlist" />

                    <div class="dropdown">
                        <button class="btn border ml-2" type="button" id="dropdownMenu"
                        data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-funnel"></i>
                        </button>
                        <ul class="dropdown-menu rounded shadow bg--grey border-0" aria-labelledby="dropdownMenu">
                            <li>
                                <a class="btn text--dark">
                                    Title
                                </a>
                            </li>
                            <li>
                                <a class="btn text--dark">
                                    Recently added
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <PlaylistCardCol :data="playlist"/>
            </div>
        </div>

        <div class="desktop">
        </div>
    </div>
</template>
<script>
import PlaylistCardCol from '@/components/mobile/PlaylistCardCol.vue'
import BackButton from '@/components/utils/BackButton.vue'
import Searchbar from '@/components/utils/Searchbar.vue'
export default {
    components: { BackButton, Searchbar, PlaylistCardCol },
    name: "Playlists",
}
</script>