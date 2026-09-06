import { defineStore } from "pinia"

export const useVisibleMenusStore = defineStore('visibleMenus', () => {
    const selectorModal = ref(false);
    const renameModal = ref(false);
    const importModal = ref(false);
    const editModal = ref(false);
  
    return { selectorModal, renameModal, importModal, editModal }
})