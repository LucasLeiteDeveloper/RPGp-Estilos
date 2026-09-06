<script lang="ts" setup>
import Sidebar from './Sidebar.vue';
import StyleMenu from './StyleMenu.vue';
import RenameModal from './RenameModal.vue';
import ImportModal from './ImportModal.vue';
import EditModal from './EditModal.vue';

import { useVisibleMenusStore } from '@/assets/stores/visibleMenusStore';
import { useStylesStore } from '@/assets/stores/stylesStore';

const props = defineProps<{ activeUrl: string }>();

const styles = useStylesStore();
const visibleMenus = useVisibleMenusStore();

let defaultExtensionStyle: any = null;

onMounted(async () => {
    const stylesModification = await import('@/assets/styles/siteMod.sass?inline');
    const stylesDependecies = await import('@/assets/styles/siteDependecies.sass?inline');

    defaultExtensionStyle = document.createElement('style');
    defaultExtensionStyle.textContent = stylesModification.default + stylesDependecies.default;
    document.head.appendChild(defaultExtensionStyle);

    styles.autoToogle();
});

onBeforeUnmount(() => {
    document.getElementById('style-ext')?.remove();
    defaultExtensionStyle?.remove();
    defaultExtensionStyle = null;
})
</script>

<template>
    <Sidebar/>
    <StyleMenu v-if="visibleMenus.selectorModal"/>
    <ImportModal v-if="visibleMenus.importModal"/>
    <RenameModal v-if="visibleMenus.renameModal"/>
    <EditModal v-if="visibleMenus.editModal"/>
</template>