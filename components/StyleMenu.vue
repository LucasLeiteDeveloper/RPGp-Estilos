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

const styles = ref(styleStorage.getAll());
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
                <div class="title-row">
                    <div class="title-container">
                        <div class="modal-title style-menu-title">Meus Estilos</div>
                        <button @click="importVisible = true" class="base-button" style="--bg: #b688ff;">
                            <div> Importar estilo </div>
                        </button>
                    </div>
                    <div class="close-icon-container">
                        <button @click="closeModal" class="close-icon-button">
                            <img src="@/assets/icons/close-icon-large.svg" draggable="false">
                        </button>
                    </div>
                </div>
                <div class="collection-list">
                    <CharacterCard v-model:styleToRename="styleToRename" v-model:renameVisible="renameVisible" v-for="style in styles" :style="style"/>
                </div>
            </div>
        </div>
        <ImportModal v-if="importVisible" v-model:importVisible="importVisible"/>
        <RenameModal v-if="renameVisible" :id="styleToRename" v-model:renameVisible="renameVisible"/>
    </div>
</template>

<style lang="sass" scoped>
.style-menu-title
    font-size: 32px
    font-weight: 500

.invisible
    display: none !important
</style>