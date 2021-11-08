<template>
    <div>
        <div class="mobile">
            <div class="px-3">
                <div class="d-flex align-baseline">
                    <BackButton />

                    <div class="mt-3 mb-4">
                        <p class="font-semibold fs-3 text--dark">Categories</p>
                    </div>
                </div>
                
                <div class="d-flex mb-5">
                    <searchbar channel="category" />
                    
                    <div class="dropdown">
                        <button class="btn border ml-2" type="button" id="dropdownMenu"
                        data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-funnel"></i>
                        </button>
                        <ul class="dropdown-menu rounded shadow bg--light border-0" aria-labelledby="dropdownMenu">
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
                
                <CategoryCardCol />
            </div>
        </div>

        <div class="desktop">
        </div>
    </div>
</template>
<script>
import BackButton from '@/components/utils/BackButton.vue'
import CategoryCardCol from '@/components/utils/CategoryCardCol.vue'
import Searchbar from '@/components/utils/Searchbar.vue'
export default {
    components: { BackButton, Searchbar, CategoryCardCol },
    name: "Categories",
    /*metaInfo: {
        title: 'Categories',
        meta: [
        { name: 'description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.'}, 
        { property: 'og:title', content: 'Categories' },
        { property: 'og:url', content: 'https://madjam.netlify.app/categories' },
        { property: 'og:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        { property: 'twitter:title', content: 'Categories' },
        { property: 'twitter:description', content: 'Browse a wide range of playlists and playlist categories created specially for your delight. Available on Apple music, Spotify and Youtube music.' },
        ]
    }*/
}
</script>