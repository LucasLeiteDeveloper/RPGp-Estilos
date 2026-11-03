<script lang="ts" setup>
import { vMount } from '@/assets/utils/vMount';
import { waitForElement, waitForOptionalElement } from '@/assets/utils/waitForElement';
import { useVisibleMenusStore } from '@/assets/stores/visibleMenusStore';
import { useStylesStore } from '@/assets/stores/stylesStore';

const visibleMenus = useVisibleMenusStore();
const styles = useStylesStore();

const elements = ref<any>(null);

onMounted(async () => {
    const [backBtn, headerBtns, changeSheetBtn] = await Promise.all([
        waitForElement('.header-navigation > .back-button'),
        waitForElement('.header-buttons-container'),
        waitForElement('.edit-sheet-button'),
    ]);

    elements.value = { backBtn, headerBtns, changeSheetBtn };

    waitForElement('.add-to-collection-button').then((btn) => {
        elements.value.copyBtn = btn;
        const copyBtnSpan = elements.value.copyBtn.querySelector('span');
        elements.value.copyBtn.removeChild(copyBtnSpan);
    });


    // elements.value.changeSheetBtn.childNodes.forEach((node: any) => {
    //     if (node.nodeType === Node.TEXT_NODE) {
    //         if(node.textContent?.trim() === "Modo de Jogo")
    //             elements.value.changeSheetBtn.click();
    //         node.remove();
    //     }
    // });

    // Desativa o estilo do usuário ao entrar no modo de edição
    // let editMode = false;

    // function alternateEditMode() {
    //     if(editMode == true) {
    //         styles.autoToogle();
    //         editMode = false;
    //         return;
    //     }

    //     document.head.querySelector('#style-ext')?.remove();
    //     editMode = true;
    // }

    // elements.value.changeSheetBtn.addEventListener("click", function() {
    //     alternateEditMode();
    // })
});
</script>

<template>
    <div class="sidebar">
        <div v-mount="elements.backBtn"/>
        <div style="height: 1px; width: 100%; background-color: rgba(255, 255, 255, .2); border-radius: 5px;"></div>
        <div class="sidebar-section">
            <div v-mount="elements.headerBtns" />
            <button @click="visibleMenus.selectorModal = true" class="universal-button">
                <img src="@/assets/icons/pincel.svg" draggable="false">
            </button>
        </div>
        <div v-if="elements.copyBtn" style="height: 1px; width: 100%; background-color: rgba(255, 255, 255, .2); border-radius: 5px;"></div>
        <div v-if="elements.copyBtn" v-mount="elements.copyBtn"></div>
    </div>
</template>

<style lang="sass" scoped>
.sidebar
    display: flex
    flex-flow: column
    position: absolute
    top: 18px
    left: 18px
    gap: 8px
    z-index: 10
    
.sidebar-section
    display: flex
    flex-flow: column
    width: fit-content
    gap: 6px
</style>