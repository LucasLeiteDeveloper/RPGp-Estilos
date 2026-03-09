<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
import { styleStorage } from '@/assets/utils/styleStorage';

interface StyleProps {
  id: Number;
  nome: String;
  css: String;
}

const props = defineProps<{ style: StyleProps }>();
const optionsVisible = ref<boolean>(false);
const optionsContainer = ref(null);

onClickOutside(optionsContainer, () => {optionsVisible.value = false});

const checkBtnState = (event: any) => {
    const activatedBtn = document.querySelector('.character-card-selected');
    if (activatedBtn && activatedBtn != event.target) {
        activatedBtn.classList.remove('character-card-selected');
        event.target.classList.add('character-card-selected');
        return true;
    } else if (activatedBtn && activatedBtn == event.target) {
        activatedBtn.classList.remove('character-card-selected');
        return false
    } else {
        event.target.classList.add('character-card-selected');
        return true
    }
}

const styleToogle = (style: String, event: any) => {
    if (checkBtnState(event)) {
        document.head.querySelector('style')?.remove();
        const styleTag = document.createElement('style');
        styleTag.textContent = style
            .replace(/;/g, ' !important;');
        document.head.appendChild(styleTag);
    } else {
        document.head.querySelector('style')?.remove();
    }
};
</script>
<template>
    <button @click.self="styleToogle(style.css, $event)" class="character-card" style="--112dad90: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 58.41%, rgba(0, 0, 0, 0.90) 100%), url(@/assets/icons/shenron-discord.png); --e93d2354: 218px; --e1ffdca8: 26px; --33d8ef12: 14px;">
        <div class="button-container click-through">
            <button @click="optionsVisible = true" class="open-options-button">
                <img src="@/assets/icons/three-dots-icon.svg">
            </button>
            <div ref="optionsContainer" class="options-container" v-if="optionsVisible">
                <button class="option-button" @click="styleStorage.deleteStyle(style.id); optionsVisible = false">
                    <span class="option-label"> Deletar </span>
                </button>
                <button class="option-button">
                    <span class="option-label"> Renomear </span>
                </button>
            </div>
        </div>
        <div class="info-container click-through">
            <div class="character-name ellipsis">{{ style.nome }}</div>
        </div>
    </button>
</template>

<style scoped>
.click-through {
  pointer-events: none;
}

.modal-content {
    display: flex;
    flex-direction: column;
    gap: 18px
}

.modal-title {
    color: #fff;
    font-family: Poppins;
    font-size: 24px
}

.modal-description {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-family: Raleway;
    font-size: 16px;
    line-height: 120%
}

.modal-warning {
    font-family: Raleway;
    font-size: 16px;
    line-height: 120%;
    color: #d60d38
}

.buttons-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px
}

.character-card {
    cursor: pointer;
    width: 204px;
    height: 204px;
    border-radius: var(--spacing-xs, 6px);
    border: 1px solid var(--color-color-stroke-primary, rgba(242, 242, 242, .2));
    background: var(--112dad90);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    aspect-ratio: 1/1
}

.character-card-selected {
    border: 1px solid rgb(182, 136, 255);
}

@media (max-width: 1440px) {
    .character-card {
        width:218px;
        height: 218px
    }
}

@media (max-width: 1219px) {
    .character-card {
        width:var(--e93d2354);
        height: var(--e93d2354)
    }
}

.button-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative
}

.open-options-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: var(--spacing-xs, 6px);
    border: 1px solid var(--color-color-stroke-primary, rgba(242, 242, 242, .2));
    background: var(--color-color-component-level-1, rgba(16, 18, 24, .4));
    box-shadow: 5px 10px 24px #00000040;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    pointer-events: auto;
}

.options-container {
    position: absolute;
    right: 0;
    top: 28px;
    width: fit-content;
    height: fit-content;
    padding: var(--spacing-xs, 6px);
    display: flex;
    flex-direction: column;
    gap: 6px;
    border-radius: var(--spacing-xs, 6px);
    border: 1px solid var(--color-color-stroke-primary, rgba(242, 242, 242, .2));
    background: var(--color-color-component-level-1, rgba(16, 18, 24, .7));
    box-shadow: 5px 10px 24px #00000040;
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    pointer-events: auto;
}

.option-button {
    height: 32px;
    padding: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #fff;
    font-family: Raleway;
    font-size: 16px;
    border-radius: var(--spacing-xs, 6px)
}

.option-button:hover {
    background: var(--color-color-component-level-2, #2e313a)
}

.option-icon {
    width: 18px;
    height: 18px
}

.option-label {
    height: 100%;
    line-height: 140%
}

.info-container {
    height: fit-content;
    padding: 6px
}

@media (max-width: 1219px) {
    .info-container {
        height:fit-content
    }
}

.max-width-padding {
    padding-left: 16px;
    margin-bottom: 6px
}

.character-name {
    width: 100%;
    height: 32px;
    color: var(--color-color-text-primary, #f2f2f2) !important;
    font-family: Lovera;
    font-size: 26px;
    text-align: left
}

@media (max-width: 1219px) {
    .character-name {
        height:fit-content;
        font-size: var(--e1ffdca8)
    }
}

.character-kit {
    width: 100%;
    height: 20px;
    color: var(--color-color-text-secondary, #aeadc3);
    font-family: Raleway;
    font-size: 16px;
    text-transform: capitalize;
    text-align: left
}

@media (max-width: 1219px) {
    .character-kit {
        font-size:var(--33d8ef12);
        height: fit-content
    }
}

.menu-enter-active,.menu-leave-active {
    transition: all .3s ease;
    overflow: hidden
}

.menu-enter-from,.menu-leave-to {
    max-height: 0;
    opacity: 0
}

.menu-enter-to,.menu-leave-from {
    max-height: 200px;
    opacity: 1
}

</style>