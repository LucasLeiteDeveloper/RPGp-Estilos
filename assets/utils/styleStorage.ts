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
      newStyle.id = styles.length + 1;
      styles.push(newStyle);
      this.save(styles);
      
      window.dispatchEvent(
        new CustomEvent('styleAdded', {
          detail: { newStyle }
        })
      );
    }
};