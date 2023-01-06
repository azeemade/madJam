import { defineStore } from 'pinia'
import { computed } from 'vue'

import data from "../assets/js/data.json"

export const useCategoryStore = defineStore('category', () => {

    const categories = computed(
        () => data.filter((item) => {
            return item.tableName == "Categories"
        })
    )
  
    return { categories }
  })