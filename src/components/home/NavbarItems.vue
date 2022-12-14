<template>
    <div 
        class="hidden w-full md:block md:w-auto" 
        id="navbar-multi-level">
        <ul 
            class="flex text-[#3F3D56] flex-col p-4 mt-4 border border-gray-100 rounded-lg 
                bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 
                dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <router-link 
                    to="/"  
                    exact-active-class="active-class"
                    class="block py-2 pl-3 pr-4 text-[#3F3D56]/50 rounded hover:underline hover:decoration-[#3F3D56]/50 
                    dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                    aria-current="page"
                >Home</router-link>
            </li>
            <li>
                <router-link 
                    to="/playlists" 
                    exact-active-class="active-class"
                    class="block py-2 pl-3 pr-4 text-[#3F3D56]/50 rounded hover:underline hover:decoration-[#3F3D56]/50 
                    dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Playlists</router-link>
            </li>
            <li>
                <router-link 
                    to="/features"  
                    exact-active-class="active-class"
                    class="block py-2 pl-3 pr-4 text-[#3F3D56]/50 rounded hover:underline hover:decoration-[#3F3D56]/50 
                    dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Features</router-link>
            </li>
            <li>
                <router-link 
                    to="/request-playlist" 
                    exact-active-class="active-class"
                    class="block py-2 pl-3 pr-4 text-[#3F3D56]/50 rounded hover:underline hover:decoration-[#3F3D56]/50 
                    dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Request playlist</router-link>
            </li>
      </ul>
    </div>
</template>
<style scoped>
    .active-class{
        @apply text-[#3F3D56] underline decoration-[#3F3D56] md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent
    }
</style>