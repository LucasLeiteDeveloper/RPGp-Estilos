import { waitForElement } from '@/assets/utils/waitForElement';
import { observeUrlChange } from '@/assets/utils/url';

import '@/assets/styles/siteMod.sass';

import Sidebar from '@/components/Sidebar.vue';

export default defineContentScript({
  matches: ['*://rpgpedia.com/*'],
  cssInjectionMode: 'manifest',

  async main(ctx: any) {
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

    onMount: (sb: any) => {
      return createApp(Sidebar, {elements}).mount(sb);
    },
  });
  ui.mount();
}
