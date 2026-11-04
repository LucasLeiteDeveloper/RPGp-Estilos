const PSEUDOS = ["", "::before", "::after", "::first-line", "::first-letter", "::marker", "::placeholder"] as const;

function takeSnapshot(elements: Element[]): string {
  const parts: string[] = [];

  elements.forEach((element, index) => {
    for (const pseudo of PSEUDOS) {
      const style = getComputedStyle(element, pseudo || null);
      for (let i = 0; i < style.length; i++) {
        const name = style[i];
        parts.push(`${index}|${pseudo}|${name}|${style.getPropertyValue(name)}`);
      }
    }
  });

  return parts.join("\n");
}

export function didStylesChange(
  elements: Iterable<Element> | ArrayLike<Element>,
  action: () => void
): boolean {
  const list = Array.from(elements); // aceita array, NodeList, HTMLCollection, Set...

  const before = takeSnapshot(list);
  action();
  return takeSnapshot(list) !== before;
}