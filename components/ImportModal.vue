<script lang="ts" setup>
import { importCss } from '@/assets/utils/importCss';
import Modal from './Modal.vue';

const props = defineProps({ importVisible: Boolean });
const emit = defineEmits<{ 'update:importVisible': [value: boolean] }>();

function closeModal() { 
  emit('update:importVisible', false);
  file.value = null;
  canImport.value = false
}

const inputFile = ref<HTMLInputElement | null>(null);
function openFileSelect() { inputFile.value?.click(); };

const file = ref<any>(null);
const canImport = ref(false);

function checkFile(event: any) {
  if (!event.target?.files[0])
    return canImport.value = false;
  file.value = event.target?.files[0];
  canImport.value = true;
}
</script>

<template>
  <Modal>
    <div class="modal-title"> Importar estilo </div>
    <div class="modal-description">
      <p>Selecione um arquivo com a extensão <strong>.CSS</strong> no campo abaixo para continuar.</p>
    </div>
    <input @change="checkFile($event)" ref='inputFile' type="file" id="cssInput" accept=".css" style="display: none;"/>
    <button @click="openFileSelect()" class="file-select">
      <img src="" alt="" class="file-img">
      <label class="file-label"> {{ file?.name ?? 'Selecionar arquivo' }} </label>
    </button>
    <div class="buttons-container">
      <button @click="closeModal" class="base-button base-button-secondary">
        <div> Cancelar </div>
      </button>
      <button @click="importCss(file), closeModal()" class="base-button" :disabled="!canImport" :class="{ 'base-button-disabled': !canImport, 'base-button-primary': canImport }">
        <div> Importar Estilo </div>
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