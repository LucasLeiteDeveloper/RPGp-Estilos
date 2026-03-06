<script lang="ts" setup>
import CharacterCard from './CharacterCard.vue';

let stylesJSON = localStorage.getItem('Styles');
let styles = null;
if (stylesJSON) {
    styles = JSON.parse(stylesJSON);
}

const props = defineProps({
    visible: Boolean,
})

const emit = defineEmits(['update:visible']);
function visibilityUpdate() {
    emit('update:visible', false);
}
</script>

<template>
    <div data-v-73fe9ed0 class="modal-container" v-if="visible">
        <div class="modal-component">
            <div class="modal-container">
                <div data-v-ba37de0e class="title-row">
                    <div data-v-ba37de0e class="title-container">
                        <div data-v-ba37de0e class="modal-title">Meus Estilos</div>
                    </div>
                    <div data-v-ba37de0e class="close-icon-container">
                        <button data-v-ba37de0e class="close-icon-button" @click="visibilityUpdate">
                            <img data-v-ba37de0e src="@/assets/icons/close-icon-large.svg" draggable="false">
                        </button>
                    </div>
                </div>
                <div class="collection-list">
                    <CharacterCard v-for="style in styles" :style="style"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.modal-component {
    display: flex !important;
    flex-direction: column !important;
    width: 1192px !important;
    max-width: 1192px !important;
    height: 556px !important;
    max-height: 556px !important;
    padding: 18px !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255, 255, 255, .2) !important;
    background:rgba(16, 18, 24, .4) !important;
    box-shadow: 5px 10px 24px #00000040 !important;
    -webkit-backdrop-filter: blur(100px) !important;
    backdrop-filter: blur(100px) !important;
    z-index: 9999 !important;
}
.modal-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.collection-list {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
}
</style>