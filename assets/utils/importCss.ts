import { useStylesStore } from "../stores/stylesStore";
import { CSSStyle } from "../stores/stylesStore";
  
export async function importCss(file: any): Promise<any> {
  const cssContent = await readFileAsText(file);

  if (containsImageReference(cssContent)) {
    return "Os estilos não podem conter imagens ou fontes externas";
  }

  const newStyle = createCssObject(file.name, cssContent);
  const styles = useStylesStore();
  styles.add(newStyle);
  return true;
}

function containsImageReference(css: string): boolean {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, "");

  const urlPattern = /url\(\s*['"]?[^'")]+['"]?\s*\)/i;
  const imageSetPattern = /image-set\(/i;

  return urlPattern.test(withoutComments) || imageSetPattern.test(withoutComments);
}

function createCssObject(fileName: string, cssContent: string): CSSStyle {
  return {
    id: 0,
    nome: fileName.replace('.css', ''),
    css: cssContent
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