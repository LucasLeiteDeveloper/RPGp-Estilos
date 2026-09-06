<script lang="ts" setup>
import { useVisibleMenusStore } from '@/assets/stores/visibleMenusStore.js';
import { useStylesStore } from '@/assets/stores/stylesStore.js';
import { useEditStore } from '@/assets/stores/editStore.js';

import Modal from './Reusable/Modal.vue';

const visibleMenus = useVisibleMenusStore();
const styles = useStylesStore();
const edit = useEditStore();

function getStyleContentById(styleId: any): string {
  const style = styles.styles.find(style => style.id === styleId);
  return style?.css ?? '';
}

function closeModal() {
  visibleMenus.editModal = false;
}
</script>

<template>
  <Modal>
    <div class="modal-title"> Editar Estilo </div>
    <textarea name="" id="" :value="getStyleContentById(edit.editId)"></textarea>
    <!-- <label v-if="errorMessage">{{ errorMessage }}</label> -->
    <div class="buttons-container">
      <button @click="closeModal" class="base-button base-button-secondary">
        <div> Cancelar </div>
      </button>
      <button @click="closeModal" class="base-button base-button-primary">
        <div> Finalizar Edição </div>
      </button>
    </div>
  </Modal>
</template>

<style scoped>
.file-select {
  width: 204px;
  height: 204px;
  border-radius: 6px;
  border: 1px solid rgba(242, 242, 242, .2);
  background: #2E313A;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 6px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1/1;
}

.file-label {
  font-size: 15px;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
}
</style>