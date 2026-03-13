<script lang="ts" setup>
import Sidebar from './Sidebar.vue';
import StyleMenu from './StyleMenu.vue';
import RenameModal from './RenameModal.vue';
import ImportModal from './ImportModal.vue';

import { useShowStore } from '@/assets/stores/showStore';
import { useStylesStore } from '@/assets/stores/stylesStore';

const props = defineProps<{ activeUrl: string }>();

const styles = useStylesStore();
const show = useShowStore();

let style: any = null;

onMounted(async () => {
    const mod = await import('@/assets/styles/siteMod.sass?inline');
    const dependecies = await import('@/assets/styles/siteDependecies.sass?inline');

    style = document.createElement('style');
    style.textContent = mod.default + dependecies.default;
    document.head.appendChild(style);

    styles.autoToogle();
});

onBeforeUnmount(() => {
    style?.remove();
    style = null;
})
</script>

<template>
    <Sidebar/>
    <StyleMenu v-if="show.selectorModal"/>
    <ImportModal v-if="show.importModal"/>
    <RenameModal v-if="show.renameModal"/>
</template>