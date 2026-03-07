import { waitForElement } from '@/assets/utils/waitForElement';
import { observeUrlChange } from '@/assets/utils/url';

import '@/assets/styles/styleMod.css';

import simpleStyle from '@/assets/styles/uniqueMod.css?raw';
import codeStyle from '@/assets/styles/codeStyleMod.css?raw';
import crisStyle from '@/assets/styles/crisMod.css?raw';

import Sidebar from '@/components/Sidebar.vue';

export default defineContentScript({
  matches: ['*://rpgpedia.com/*'],
  cssInjectionMode: 'manifest',

  async main(ctx) {
    let styles = [
      {
        id: 1,
        nome: 'Estilo Simples',
        css: simpleStyle
      },
      {
        id: 2,
        nome: 'Estilo Verde',
        css: codeStyle
      },
      {
        id: 3,
        nome: 'Estilo Cris',
        css: crisStyle
      },
    ];
    localStorage.setItem('Styles', JSON.stringify(styles));

    observeUrlChange('/ficha/universal/', (url) => {
      start(ctx); 
    });
  }
});

async function start(ctx: any) {
  const page = await waitForElement('.universal-sheet-page');

  const elements = {
    backBtn: await waitForElement('.back-button[data-v-8b81d767]'),
    headerBtns: await waitForElement('.header-buttons-container'),
    changeSheetBtn: await waitForElement('.change-sheet-mode-button'),
  };

  elements.changeSheetBtn.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
    }
  });

  const ui = await createIntegratedUi(ctx, {
    position: 'inline',
    anchor: page,
    append: 'first',

    onMount: (sb) => {
      return createApp(Sidebar, {elements}).mount(sb);
    },
  });
  ui.mount();
}
