<script lang="ts" setup>
import '@/assets/styles/siteMod.sass';
import '@/assets/styles/siteDependecies.sass';

import Sidebar from './Sidebar.vue';
import StyleMenu from './StyleMenu.vue';
import RenameModal from './RenameModal.vue';
import ImportModal from './ImportModal.vue';

import { useShowStore } from '@/assets/stores/showStore';
const show = useShowStore();
</script>

<template>
    <Sidebar/>
    <StyleMenu v-if="show.selectorModal"/>
    <ImportModal v-if="show.importModal"/>
    <RenameModal v-if="show.renameModal"/>
</template>