<script lang="ts" setup>
import { styleStorage } from '@/assets/utils/styleStorage';
import Modal from './Modal.vue';

const props = defineProps({ renameVisible: Boolean, id: Number });
const emit = defineEmits<{ 'update:renameVisible': [value: boolean] }>();

const newName = ref('');

function closeModal() { 
  emit('update:renameVisible', false);
  newName.value = '';
}
</script>

<template>
  <Modal>
    <div class="modal-title"> Renomear Estilo </div>
    <input v-model="newName" class="base-input" type="text" placeholder="Escreva aqui" maxlength="128" style="--006b5ae5: 100%; --82ae5dda: left;">
    <div class="buttons-container">
      <button @click="closeModal" class="base-button base-button-secondary">
        <div> Cancelar </div>
      </button>
      <button @click="styleStorage.renameStyle(props.id, newName), closeModal()" class="base-button base-button-primary">
        <div> Renomear Estilo </div>
      </button>
    </div>
  </Modal>
</template>

<style scoped>
.base-input {
    width: var(--006b5ae5);
    height: 32px;
    padding: 9px 8px;
    border-radius: 4px;
    border: 1px solid var(--color-color-stroke-input-default, #85878c);
    background: var(--color-color-component-level-2, #2e313a);
    color: var(--color-color-text-primary, #f2f2f2);
    font-family: Raleway;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    text-align: var(--82ae5dda);
}

.buttons-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
}
</style>