import { defineStore } from "pinia"

export const useRenameStore = defineStore('rename', () => {
    const nName = ref<any>(null);
    const renameId = ref<any>(null);
  
    return { nName, renameId }
})