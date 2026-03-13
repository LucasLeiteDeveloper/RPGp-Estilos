import { defineStore } from "pinia"

export interface CSSStyle {
    id: number;
    nome: string;
    css: string;
}

export const useStylesStore = defineStore('styles', () => {
    const styles = ref<CSSStyle[]>(JSON.parse(localStorage.getItem('Styles') ?? '[]'));

    watch(styles, (val: CSSStyle[]) => {
        localStorage.setItem('Styles', JSON.stringify(val));
    }, { deep: true });

    function add(nStyle: CSSStyle) {
        nStyle.id = (styles.value.at(-1)?.id ?? 0) + 1;
        styles.value.push(nStyle);
    }

    function remove(id: any) {
        styles.value = styles.value.filter(item => item.id !== id);
    }

    function rename(id: any, newName: any) {
        const indexToRename = styles.value.findIndex(style => style.id === id);
        styles.value[indexToRename].nome = newName;
    }

    return { styles, add, remove, rename }
})