<script lang="ts" setup>
import { useShowStore } from '@/assets/stores/showStore';
import { useStylesStore } from '@/assets/stores/stylesStore';

import CharacterCard from './CharacterCard.vue';

const props = defineProps({ visible: Boolean });

const styles = useStylesStore();
const show = useShowStore();
</script>

<template>
    <div class="modal-background-overlay">
        <div class="modal-component style-menu-modal">
            <div class="modal-content">
                <div class="title-row">
                    <div class="title-container">
                        <div class="modal-title style-menu-title">Meus Estilos</div>
                        <button @click="show.importModal = true" class="base-button" style="--bg: #b688ff;">
                            <div> Importar estilo </div>
                        </button>
                    </div>
                    <div class="close-icon-container">
                        <button @click="show.selectorModal = false" class="close-icon-button">
                            <img src="@/assets/icons/close-icon-large.svg" draggable="false">
                        </button>
                    </div>
                </div>
                <div class="collection-list">
                    <CharacterCard v-for="style in styles.styles" :style="style"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.style-menu-title
    font-size: 32px
    font-weight: 500

.invisible
    display: none !important
</style>