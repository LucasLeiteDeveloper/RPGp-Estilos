export function waitForElement(selector: string): Promise<HTMLElement> {
    return new Promise((resolve) => {
      // Se o elemento já existe, resolve na hora
      const element = document.querySelector(selector);
      if (element) {
        return resolve(element as HTMLElement);
      }
  
      // Caso contrário, observa mudanças no corpo da página
      const observer = new MutationObserver(() => {
        const target = document.querySelector(selector);
        if (target) {
          observer.disconnect(); // Para de observar para economizar memória
          resolve(target as HTMLElement);
        }
      });
  
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }