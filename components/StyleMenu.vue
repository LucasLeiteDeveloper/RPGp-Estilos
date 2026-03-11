<script lang="ts" setup>
import CharacterCard from './CharacterCard.vue';
import ImportModal from './ImportModal.vue';
import RenameModal from './RenameModal.vue';

import { styleStorage } from '@/assets/utils/styleStorage';

const props = defineProps({ visible: Boolean });
const emit = defineEmits<{ 'update:visible': [value: boolean] }>()

const importVisible = ref(false);
const renameVisible = ref(false);
const styleToRename = ref();

let styles = ref(styleStorage.getAll());
onMounted(() => {
    window.addEventListener('styleAdded', (event: any) => { styles.value.push(event.detail.newStyle) });
    window.addEventListener('styleDeleted', () => { styles.value = styleStorage.getAll() });
    window.addEventListener('styleRenamed', () => { styles.value = styleStorage.getAll() });
});

function closeModal() { emit('update:visible', false); }
</script>

<template>
    <div class="modal-background-overlay" :class="{ 'invisible': !visible }">
        <div class="modal-component style-menu-modal">
            <div class="modal-content">
                <div data-v-ba37de0e class="title-row">
                    <div data-v-ba37de0e class="title-container">
                        <div data-v-ba37de0e class="modal-title">Meus Estilos</div>
                        <button @click="importVisible = true" class="base-button" style="--bg: #b688ff;">
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
                    <CharacterCard v-model:styleToRename="styleToRename" v-model:renameVisible="renameVisible" v-for="style in styles" :style="style"/>
                </div>
            </div>
        </div>
        <ImportModal v-model:importVisible="importVisible"/>
        <RenameModal v-model:id="styleToRename" v-model:renameVisible="renameVisible"/>
    </div>
</template>

<style lang="sass" scoped>
.invisible
    display: none !important
</style>