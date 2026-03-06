<script lang="ts" setup>
import { vMount } from '@/assets/utils/vMount';
import StyleMenu from '@/components/StyleMenu.vue';

interface ElementsProps {
  backBtn: HTMLElement;
  headerBtns: HTMLElement;
}

const props = defineProps<{ elements: ElementsProps }>();

const visible = ref<boolean>(false);
</script>

<template>
    <div class="sidebar">
        <div v-mount="elements.backBtn" />
        <div class="sidebar-section">
            <div v-mount="elements.headerBtns" />
        </div>
        <div class="sidebar-section">
            <button @click="visible = true" data-v-1af09095 class="universal-button">
                <img data-v-1af09095 src="@/assets/icons/pincel.svg" draggable="false">
            </button>
        </div>
    </div>
    <StyleMenu v-model:visible="visible"></StyleMenu>
</template>

<style scoped>
    .sidebar {
        display: flex;
        flex-flow: column;
        gap: 8px;
        position: absolute;
        top: 18px;
        left: 18px;
        z-index: 10;
    }
    
    .sidebar-section {
        width: fit-content;
        padding: 5px;
        border-radius: 12px;
        border: 1px solid rgba(242, 242, 242, .2);
        background: rgba(16, 18, 24, .4);
        box-shadow: 5px 10px 24px #00000040;
        -webkit-backdrop-filter: blur(100px);
        backdrop-filter: blur(100px);
        filter: none;
    }
</style>