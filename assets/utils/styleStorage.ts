export interface CSSStyle {
    id: number;
    nome: string;
    css: string;
}

export const styleStorage = {
    getAll(): CSSStyle[] {
      const stored = localStorage.getItem('Styles');
      return stored ? JSON.parse(stored) : [];
    },
  
    save(styles: CSSStyle[]): void {
      localStorage.setItem('Styles', JSON.stringify(styles));
    },
  
    addStyle(newStyle: CSSStyle): void {
      const styles = this.getAll();
      newStyle.id = (styles.at(-1)?.id ?? 0) + 1;
      styles.push(newStyle);
      this.save(styles);

      window.dispatchEvent(
        new CustomEvent('styleAdded', {
          detail: { newStyle }
        })
      );
    },

    deleteStyle(id: Number) {
        console.log('Funciona')
        const styles = this.getAll();
        const filteredStyles = styles.filter(item => item.id !== id);
        this.save(filteredStyles);

        window.dispatchEvent(
            new CustomEvent('styleDeleted', {
              detail: { id }
            })
        );
    }
};