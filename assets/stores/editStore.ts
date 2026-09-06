import { defineStore } from "pinia"

export const useEditStore = defineStore('edit', () => {
    // const nName = ref<any>(null);
    const editId = ref<any>(null);
  
    return { editId }
})