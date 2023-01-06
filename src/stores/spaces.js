import { defineStore } from 'pinia'
import { computed } from 'vue'

import data from "../assets/js/data.json"

export const useSpacesStore = defineStore('spaces', () => {

    const spaces = computed(
        () => data.filter((item) => {
            return item.tableName == "Space schedules"
        })
    )
  
    return { spaces }
  })