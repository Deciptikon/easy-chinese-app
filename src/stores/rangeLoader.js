import { defineStore } from 'pinia'

export const useRangeLoader = defineStore('rangeLoader', {
  state: () => ({
    loadedRanges: {},
  }),

  actions: {
    async loadRange(range) {
      if (this.loadedRanges[range]) {
        return this.loadedRanges[range]
      }

      let url = `/ranges/${range}/data.json`
      if (import.meta.env.VITE_DEBUG_MODE !== 'true') {
        url = '.' + url
      }

      const response = await fetch(url)
      console.log(response)
      const data = await response.json()
      this.loadedRanges[range] = data
      return data
    },
  },
})
