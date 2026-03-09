import { styleStorage } from "./styleStorage";
import { CSSStyle } from "./styleStorage";

const cssHandler = {
    createStyleObject(fileName: string, cssContent: string): CSSStyle {
      return {
        id: 0,
        nome: this.extractFileName(fileName),
        css: cssContent
      };
    },
  
    extractFileName(fileName: string): string {
      return fileName.replace('.css', '');
    },
  };
  
export async function importCss(event: any): Promise<void> {
      const file = event.target?.files[0];
  
      if (!file) return
  
      const cssContent = await readFileAsText(file);
      const newStyle = cssHandler.createStyleObject(file.name, cssContent);
      styleStorage.addStyle(newStyle);    
};
  
  function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const content = event.target?.result;
        if (typeof content === 'string') {
          resolve(content);
        }
      };
      
      reader.readAsText(file);
    });
};