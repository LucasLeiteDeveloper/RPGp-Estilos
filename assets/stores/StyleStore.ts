import { defineStore } from "pinia";

export interface Style {
    id: number;
    nome: string;
    css: string;
}

export const useStylesStore = defineStore('styles', () => {
    const activeStyle = ref<any>(JSON.parse(localStorage.getItem('ActiveStyle') ?? 'null'));
    const styleStorage = ref<Style[]>(JSON.parse(localStorage.getItem('Styles') ?? '[]'));

    function add(style: Style) {
        style.id = (styleStorage.value.at(-1)?.id ?? 0) + 1;
        styleStorage.value.push(style);
    }

    function update(styleToUpdate: Style) {
        const indexToUpdate = styleStorage.value.findIndex(style => style.id === styleToUpdate.id);
        const activeId = styleStorage.value.findIndex(style => style.id === activeStyle.value);
        styleStorage.value[indexToUpdate] = styleToUpdate;
        if(styleStorage.value[activeId].id == styleToUpdate.id) {
            document.head.querySelector("#style-ext")?.remove();
            toogle(styleToUpdate.id, styleToUpdate.css);
        }
    }

    function remove(id: any) {
        styleStorage.value = styleStorage.value.filter(item => item.id !== id);

        const active = document.querySelector('.style-selected');
        if (active?.id == `style-${id}`) {
            active.classList.remove('style-selected');
            document.head.querySelector('#style-ext')?.remove();
            activeStyle.value = null;
        }
    }

    function rename(id: any, newName: any) {
        const indexToRename = styleStorage.value.findIndex(style => style.id === id);
        styleStorage.value[indexToRename].nome = newName;
    }

    function toogle(id: any, style: string, event?: any) {
        if(containsURLinCSS(style)) return;

        // Se essa função for ativada por um input do usuário
        if(event) {
            document.head.querySelector('#style-ext')?.remove();
            const active = document.querySelector('.style-selected');
            active?.classList.remove('style-selected');

            activeStyle.value = null;

            if (active === event.target) return;
            event.target.classList.add('style-selected');
        }

        const styleTag = document.createElement('style');
        styleTag.id = 'style-ext';

        styleTag.textContent = formatCSS(style);

        document.head.appendChild(styleTag);
        activeStyle.value = id;
    };

    function autoToogle() {
        if (!activeStyle.value) return;
        const activeId = styleStorage.value.findIndex(style => style.id === activeStyle.value);
        toogle(styleStorage.value[activeId].id, styleStorage.value[activeId].css)
    }

    function autoSelect() {
        if (!activeStyle.value) return;
        const activeElement = document.getElementById(`style-${activeStyle.value}`);
        activeElement?.classList.add('style-selected');
    }

    return { styleStorage, activeStyle, add, update, remove, rename, toogle, autoToogle, autoSelect }
})