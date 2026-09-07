<script lang="ts" setup>
import { useVisibleMenusStore } from '@/assets/stores/visibleMenusStore.js';
import { useStylesStore } from '@/assets/stores/stylesStore.js';
import { useEditStore } from '@/assets/stores/editStore.js';

import Modal from './Reusable/Modal.vue';

const visibleMenus = useVisibleMenusStore();
const styles = useStylesStore();
const edit = useEditStore();

const contentEdit = ref(getStyleContentById(edit.editId))

function getStyleContentById(styleId: any): string {
  const style = styles.styles.find(style => style.id === styleId);
  return style?.css ?? '';
}

function updateStyleContentById(styleId: any, content: string): string | void {
  const style = styles.styles.find(style => style.id === styleId);
  if(!style) return;
  style.css = content;
  styles.update(style);
  closeModal();
}

function closeModal() {
  visibleMenus.editModal = false;
}
</script>

<template>
  <Modal>
    <div class="modal-title"> Editar Estilo </div>
    <textarea spellcheck="false" v-model="contentEdit"></textarea>
    <!-- <label v-if="errorMessage">{{ errorMessage }}</label> -->
    <div class="buttons-container">
      <button @click="closeModal" class="base-button base-button-secondary">
        <div> Cancelar </div>
      </button>
      <button @click="updateStyleContentById(edit.editId, contentEdit)" class="base-button base-button-primary">
        <div> Finalizar Edição </div>
      </button>
    </div>
  </Modal>
</template>

<style scoped>
textarea {
  resize: none;
  width: 100%;
  height: 300px;
  padding: 9px 8px;
  background-color: #2e313a;
  border-radius: 4px;
  border: 1px solid #85878c;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}
</style>