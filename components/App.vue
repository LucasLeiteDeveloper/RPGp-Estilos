<script lang="ts" setup>
import '@/assets/styles/siteMod.sass';
import '@/assets/styles/siteDependecies.sass';

import Sidebar from './Sidebar.vue';
import StyleMenu from './StyleMenu.vue';
import RenameModal from './RenameModal.vue';
import ImportModal from './ImportModal.vue';

import { useCounterStore } from '@/assets/utils/storeActive';

const isSelectorVisible = ref(false);
const isRenameVisible = ref(false);
const isImportVisible = ref(false);

onMounted(() => {
    const store = useCounterStore();
    console.log('Oi: ', store);
})
</script>

<template>
    <!-- <div @click="store.increment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi nobis excepturi quo cum magnam, consectetur esse asperiores ipsum? Error vel sapiente itaque impedit omnis neque cumque architecto quibusdam repudiandae.</div> -->
    <Sidebar/>
    <!-- <StyleMenu v-model:isSelectorVisible="isSelectorVisible"/>
    <ImportModal v-model:isImportVisible="isImportVisible"/>
    <RenameModal v-model:isRenameVisible="isRenameVisible"/> -->
</template>