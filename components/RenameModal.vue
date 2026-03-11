<script lang="ts" setup>
import { styleStorage } from '@/assets/utils/styleStorage';
const props = defineProps({ renameVisible: Boolean, id: Number });
const emit = defineEmits<{ 'update:renameVisible': [value: boolean] }>();

function closeModal() { 
  emit('update:renameVisible', false);
  newName.value = '';
}

const newName = ref('');
</script>

<template>
  <div class="modal-background-overlay" v-if="renameVisible">
    <div class="modal-component">
      <div class="modal-content">
        <div data-v-cd75c131 class="modal-title"> Renomear Estilo </div>
        <input v-model="newName" class="base-input" type="text" placeholder="Escreva aqui" maxlength="128" style="--006b5ae5: 100%; --82ae5dda: left;">
        <div data-v-cd75c131 class="buttons-container">
          <button @click="closeModal" data-v-0f9882be data-v-cd75c131 class="base-button base-button-secondary" style="--4aa81e10: 16px; --9ae9ccda: fit-content; --2ca0e07c: 26px; --53d9c7dd: 6px; --026c3fb0: 6px; --2793b7e4: #B688FF; --af39746a: #060517;"><!---->
            <div data-v-0f9882be> Cancelar </div>
          </button>
          <button @click="() => {styleStorage.renameStyle(props.id, newName); closeModal()}" data-v-0f9882be data-v-cd75c131 class="base-button base-button-primary" style="--4aa81e10: 16px; --9ae9ccda: fit-content; --2ca0e07c: 26px; --53d9c7dd: 6px; --026c3fb0: 6px;">
            <div data-v-0f9882be> Renomear Estilo </div>
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

.base-button-primary {
  --4aa81e10: 16px;
  --9ae9ccda: fit-content;
  --2ca0e07c: 26px;
  --53d9c7dd: 6px;
  --026c3fb0: 6px;
  --2793b7e4: #b688ff;
  --af39746a: rgb(6, 5, 23);
}

.base-button {
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