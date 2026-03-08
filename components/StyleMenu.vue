<script lang="ts" setup>
import CharacterCard from './CharacterCard.vue';
import ImportModal from './ImportModal.vue';

import { styleStorage } from '@/assets/utils/styleStorage';

const props = defineProps({ visible: Boolean });
const emit = defineEmits<{ 'update:visible': [value: boolean] }>()

let styles = ref(styleStorage.getAll());
onMounted(() => {
    window.addEventListener('styleAdded', (event: any) => {
        styles.value.push(event.detail.newStyle);
    });
});

function closeModal() { emit('update:visible', false); }
</script>

<template>
    <div data-v-73fe9ed0 class="modal-container" :class="{ 'invisible': !visible }">
        <div class="modal-component">
            <div class="modal-container">
                <div data-v-ba37de0e class="title-row">
                    <div data-v-ba37de0e class="title-container">
                        <div data-v-ba37de0e class="modal-title">Meus Estilos</div>
                        <button class="base-button" style="--bg: #b688ff;">
                            <div> Importar estilo </div>
                        </button>
                    </div>
                    <div data-v-ba37de0e class="close-icon-container">
                        <button data-v-ba37de0e class="close-icon-button" @click="closeModal">
                            <img data-v-ba37de0e src="@/assets/icons/close-icon-large.svg" draggable="false">
                        </button>
                    </div>
                </div>
                <div class="collection-list">
                    <CharacterCard v-for="style in styles" :style="style"/>
                </div>
            </div>
        </div>
        <ImportModal/>
    </div>
</template>

<style>
.modal-component {
    display: flex;
    flex-direction: column;
    width: 1192px;
    max-width: 1192px;
    height: 556px;
    max-height: 556px;
    padding: 18px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, .2);
    background:rgba(16, 18, 24, .4);
    box-shadow: 5px 10px 24px #00000040;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    z-index: 9999;
}
.modal-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.collection-list {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}
.base-button {
    font-size: 14px;
    width: fit-content;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    border-radius: 8px;
    border: 1px solid rgba(242, 242, 242, .2);
    background: var(--bg);
    color: #060517;
    font-family: Poppins;
    font-weight: 500;
}
.invisible {
    display: none !important;
}
</style>