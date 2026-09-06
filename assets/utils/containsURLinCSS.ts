export function containsURLinCSS(cssFileContent: string): boolean {
  const withoutComments = cssFileContent.replace(/\/\*[\s\S]*?\*\//g, "");
  const urlPattern = /url\(\s*['"]?[^'")]+['"]?\s*\)/i;
  return urlPattern.test(withoutComments);
}