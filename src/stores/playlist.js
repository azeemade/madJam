import { defineStore } from 'pinia'
import { computed } from 'vue'

import data from "../assets/js/data.json"

export const usePlaylistStore = defineStore('playlist', () => {

    const playlists = computed(
        () => data.filter((item) => {
            return item.tableName == "Monthly playlists"
        })
    )
  
    return { playlists }
  })