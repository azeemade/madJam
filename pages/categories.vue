<template>
    <div>
        <div v-if="$device.isMobile">
            <div class="px-3">
                <backbutton />

                <div class="mt-3 mb-4">
                    <p class="font-semibold fs-5 text--dark">Categories</p>
                </div>
                <div class="d-flex mb-5">
                    <searchbar channel="category" />
                    
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
                
                <categorycardcol />
            </div>
        </div>

        <div v-else>
        </div>
    </div>
</template>
<script>
import Backbutton from '../components/utils/backbutton.vue'
import Categorycardcol from '../components/utils/categorycardcol.vue'
import Searchbar from '../components/utils/searchbar.vue'
export default {
  components: { Backbutton, Searchbar, Categorycardcol },
  name: "categories",
  layout: (ctx) => ctx.$device.isMobile ? 'default' : 'desktop'
}
</script>