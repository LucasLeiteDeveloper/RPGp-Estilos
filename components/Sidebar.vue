<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import StyleMenu from '@/components/StyleMenu.vue';

const props = defineProps<{
    elements: {
        backBtn: HTMLElement,
        headerBtns: HTMLElement,
    }
}>()

const visible = ref(false);
function handleVisibilityUpdate(newValue: any) {
  visible.value = newValue;
}

const backBtnRef = ref<HTMLElement | null>(null);
const headerBtnsRef = ref<HTMLElement | null>(null);
onMounted(() => {
  if (backBtnRef.value && props.elements.backBtn) {
    backBtnRef.value.appendChild(props.elements.backBtn);
  }
  if (headerBtnsRef.value && props.elements.headerBtns) {
    headerBtnsRef.value.appendChild(props.elements.headerBtns);
  }
});
</script>

<template>
    <div id="sidebar">
        <div ref="backBtnRef"></div>
        <div class="sidebar-section">
            <div ref="headerBtnsRef"></div>
        </div>
        <button class="sidebar-section button" @click="visible = true"/>
    </div>
    <StyleMenu :visible="visible" @update:visible="handleVisibilityUpdate"></StyleMenu>
</template>

<style scoped>
    #sidebar {
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
        border: 1px solid var(--color-color-stroke-primary, rgba(242, 242, 242, .2));
        background: var(--color-color-component-level-1, rgba(16, 18, 24, .4));
        box-shadow: 5px 10px 24px #00000040;
        -webkit-backdrop-filter: blur(100px);
        backdrop-filter: blur(100px);
        filter: var(--fd4ba95a);
    }

    .button {
        width: 64px;
        height: 64px;
    }
</style>