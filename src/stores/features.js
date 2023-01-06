import { defineStore } from 'pinia'
import { computed } from 'vue'

import data from "../assets/js/data.json"

export const useFeaturesStore = defineStore('features', () => {

    const features = computed(
        () => data.filter((item) => {
            return item.tableName == "Weekly Features"
        })
    )
  
    return { features }
  })