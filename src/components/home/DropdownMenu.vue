<script setup>
</script>

<template>
    <div id="dropdownDots" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-[#3f3d56]/50 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li class="group">
                <a 
                    href="#" 
                    target="_blank"
                    class="flex space-x-2 py-2 px-4 group-hover:text-[#3f3d56] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div>
                        <i class="ri-music-line group-hover:ri-music-fill"></i>
                    </div>
                    <div>
                        Open in 
                        <i 
                            class="ri-apple-line">
                        </i> 
                        Music
                    </div>
                </a>
            </li>
            <li class="group">
                <a 
                    href="#" 
                    class="flex space-x-2 py-2 px-4 group-hover:text-[#3f3d56] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div>
                        <i class="ri-music-line group-hover:ri-music-fill"></i>
                    </div>
                    <div>
                        Open in 
                        <i 
                            class="ri-spotify-line">
                        </i> 
                        Spotify
                    </div>
                </a>
            </li>
            <li class="group">
                <a 
                    href="#" 
                    class="flex space-x-2 py-2 px-4 group-hover:text-[#3f3d56] hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div>
                        <i class="ri-share-forward-line group-hover:ri-share-forward-fill"></i>
                    </div>
                    <div>
                        Share link
                    </div>
                </a>
            </li>
        </ul>
        <!-- <div class="py-1">
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
        </div> -->
    </div>
</template>
