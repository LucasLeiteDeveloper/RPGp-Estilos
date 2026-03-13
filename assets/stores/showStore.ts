import { defineStore } from "pinia"

export const useShowStore = defineStore('show', () => {
    const selectorModal = ref(false);
    const renameModal = ref(false);
    const importModal = ref(false);
  
    return { selectorModal, renameModal, importModal }
})