<script lang="ts" setup>
import { ref } from 'vue';
const closed = ref(false);
</script>

<template>
    <div id="styleEditor" v-if="!closed">
        <button @click="closed = true" />
    </div>
</template>

<style scoped>
    #styleEditor {
        width: 10vw;
        height: 10vh;
        background: black;
    }
    button {
        width: 100%;
        height: 100%;
    }
</style>