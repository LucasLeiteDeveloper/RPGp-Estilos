<script lang="ts" setup>
import { importCss } from '@/assets/utils/importCss';

const props = defineProps({ importVisible: Boolean });
const emit = defineEmits<{ 'update:importVisible': [value: boolean] }>();

function closeModal() { emit('update:importVisible', false); }

const inputFile = ref<HTMLInputElement | null>(null);
function openFileSelect() { inputFile.value?.click(); };
</script>

<template>
  <div class="modal-container" v-if="importVisible">
    <div class="modal-component">
      <div class="modal-content">
        <div data-v-cd75c131 class="modal-title"> Importar estilo </div>
        <div class="modal-description">
          <p>Selecione um arquivo com a extensão <strong>.CSS</strong> no campo abaixo para continuar.</p>
        </div>
        <input ref='inputFile' @change="importCss($event)" type="file" id="cssInput" accept=".css" style="display: none;"/>
        <button @click="openFileSelect()" class="file-select">
          <img src="" alt="" class="file-img">
          <label class="file-label">Selecionar arquivo</label>
        </button>
        <div data-v-cd75c131 class="buttons-container">
          <button @click="closeModal" data-v-0f9882be data-v-cd75c131 class="base-button base-button-secondary" style="--4aa81e10: 16px; --9ae9ccda: fit-content; --2ca0e07c: 26px; --53d9c7dd: 6px; --026c3fb0: 6px; --2793b7e4: #B688FF; --af39746a: #060517;"><!---->
            <div data-v-0f9882be> Cancelar </div>
          </button>
          <button data-v-0f9882be data-v-cd75c131 class="base-button base-button-disabled" disabled style="--4aa81e10: 16px; --9ae9ccda: fit-content; --2ca0e07c: 26px; --53d9c7dd: 6px; --026c3fb0: 6px; --2793b7e4: #D60D38; --af39746a: #F2F2F2;"><!---->
            <div data-v-0f9882be> Importar </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
    position: fixed;
    z-index: 99999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal-component {
    display: flex;
    flex-direction: column;
    width: 560px;
    max-width: 600px;
    height: fit-content;
    max-height: 600px;
    padding: 18px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, .2);
    background: rgba(16, 18, 24, .4);
    box-shadow: 5px 10px 24px #00000040;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    z-index: 99999;
}
.modal-content {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.modal-title {
    color: #fff;
    font-family: Poppins;
    font-size: 24px;
}
.modal-description {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: Raleway;
    font-size: 16px;
    line-height: 120%;
}
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

.base-button{
    font-size: var(--4aa81e10);
    width: var(--9ae9ccda);
    height: var(--2ca0e07c);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--53d9c7dd);
    padding: var(--026c3fb0);
    border-radius: 8px;
    border: 1px solid var(--stroke-primary, rgba(242, 242, 242, .2));
    background: var(--2793b7e4);
    color: var(--af39746a);
    font-family: Poppins;
    font-weight: 500;
}
</style>