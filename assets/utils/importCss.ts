import { useStylesStore } from "../stores/stylesStore";
import { CSSStyle } from "../stores/stylesStore";
import { containsURLinCSS } from "./containsURLinCSS";
  
export async function importCss(cssFile: any): Promise<true|string> {
  const cssFileContent = await readFileAsText(cssFile);

  if(containsURLinCSS(cssFileContent)) return "Os estilos não podem conter imagens ou fontes externas";

  const newStyle = createCssObject(cssFile.name, cssFileContent);
  const styles = useStylesStore();
  styles.add(newStyle);

  return true;
}

function createCssObject(fileName: string, cssFileContent: string): CSSStyle {
  return {
    id: 0,
    nome: fileName.replace('.css', ''),
    css: cssFileContent
  };
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