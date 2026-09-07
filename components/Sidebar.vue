<script lang="ts" setup>
import { vMount } from '@/assets/utils/vMount';
import { waitForElement } from '@/assets/utils/waitForElement';
import { useVisibleMenusStore } from '@/assets/stores/visibleMenusStore';
import { useStylesStore } from '@/assets/stores/stylesStore';

const visibleMenus = useVisibleMenusStore();
const styles = useStylesStore();

const elements = ref<any>(null);

onMounted(async () => {
    elements.value = {
        backBtn: await waitForElement('#app > div > button'),
        headerBtns: await waitForElement('.header-buttons-container'),
        changeSheetBtn: await waitForElement('.change-sheet-mode-button'),
    };

    elements.value.changeSheetBtn.childNodes.forEach((node: any) => {
        if (node.nodeType === Node.TEXT_NODE) {
            if(node.textContent?.trim() === "Modo de Jogo")
                elements.value.changeSheetBtn.click();
            node.remove();
        }
    });


    // Desativa o estilo do usuário ao entrar no modo de edição
    let editMode = false;

    function alternateEditMode() {
        if(editMode == true) {
            styles.autoToogle();
            editMode = false;
            return;
        }

        document.head.querySelector('#style-ext')?.remove();
        editMode = true;
    }

    elements.value.changeSheetBtn.addEventListener("click", function() {
        alternateEditMode();
    })
});
</script>

<template>
    <div class="sidebar">
        <div v-mount="elements.backBtn" />
        <div class="sidebar-section">
            <div v-mount="elements.headerBtns" />
        </div>
        <div class="sidebar-section">
            <button @click="visibleMenus.selectorModal = true" class="universal-button">
                <img src="@/assets/icons/pincel.svg" draggable="false">
            </button>
        </div>
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
    width: fit-content
    padding: 5px
    border-radius: 12px
    border: 1px solid rgba(242, 242, 242, .2)
    background: rgba(16, 18, 24, .4)
    box-shadow: 5px 10px 24px #00000040
    -webkit-backdrop-filter: blur(100px)
    backdrop-filter: blur(100px)
    filter: none
</style>