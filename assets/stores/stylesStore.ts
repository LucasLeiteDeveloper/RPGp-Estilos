import { defineStore } from "pinia"

export interface CSSStyle {
    id: number;
    nome: string;
    css: string;
}

export const useStylesStore = defineStore('styles', () => {
    const activeStyle = ref<any>(JSON.parse(localStorage.getItem('ActiveStyle') ?? 'null'));
    const styles = ref<CSSStyle[]>(JSON.parse(localStorage.getItem('Styles') ?? '[]'));

    watch(styles, (val: CSSStyle[]) => {
        localStorage.setItem('Styles', JSON.stringify(val));
    }, { deep: true });

    watch(activeStyle, (id: any) => {
        localStorage.setItem('ActiveStyle', JSON.stringify(id));
    });

    // CRUD
    function add(nStyle: CSSStyle) {
        nStyle.id = (styles.value.at(-1)?.id ?? 0) + 1;
        styles.value.push(nStyle);
    }

    function remove(id: any) {
        styles.value = styles.value.filter(item => item.id !== id);

        const active = document.querySelector('.style-selected');
        if (active?.id == `style-${id}`) {
            active.classList.remove('style-selected');
            document.head.querySelector('#style-ext')?.remove();
            activeStyle.value = null;
        }
    }

    function rename(id: any, newName: any) {
        const indexToRename = styles.value.findIndex(style => style.id === id);
        styles.value[indexToRename].nome = newName;
    }

    function toogle(id: any, style: String, event: any) {
        document.head.querySelector('#style-ext')?.remove();
        const active = document.querySelector('.style-selected');
        active?.classList.remove('style-selected');

        activeStyle.value = null;
        
        if (active === event.target) return;
        
        event.target.classList.add('style-selected');

        const styleTag = document.createElement('style');
        styleTag.id = 'style-ext';
        styleTag.textContent = style.replace(/;/g, ' !important;');
        document.head.appendChild(styleTag);

        activeStyle.value = id;
    };

    function autoToogle() {
        if (!activeStyle.value) return;
        const activeId = styles.value.findIndex(style => style.id === activeStyle.value);

        const styleTag = document.createElement('style');
        styleTag.id = 'style-ext';
        styleTag.textContent = styles.value[activeId].css.replace(/;/g, ' !important;');
        document.head.appendChild(styleTag);
    }

    function autoSelect() {
        if (!activeStyle.value) return;
        const activeElement = document.getElementById(`style-${activeStyle.value}`);
        activeElement?.classList.add('style-selected');
    }

    return { styles, activeStyle, add, remove, rename, toogle, autoToogle, autoSelect }
})