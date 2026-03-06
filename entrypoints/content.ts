import { createApp } from 'vue';

import '@/assets/styles/styleMod.css';
import '@/assets/styles/codeStyleMod.css';

import { waitForElement } from '@/assets/utils/waitForElement';
import { observeUrlChange } from '@/assets/utils/url';

import Sidebar from '@/components/Sidebar.vue';

export default defineContentScript({
  matches: ['*://rpgpedia.com/*'],
  cssInjectionMode: 'manifest',

  async main(ctx) {
    observeUrlChange('/ficha/universal/', (url) => {
      start(ctx); 
    });
  }
});

async function start(ctx: any) {
  const page = await waitForElement('.universal-sheet-page');
  // const bg = await waitForElement('.wallpaper-media');

  const elements = {
    backBtn: await waitForElement('.back-button[data-v-8b81d767]'),
    headerBtns: await waitForElement('.header-buttons-container'),
    changeSheetBtn: await waitForElement('.change-sheet-mode-button'),
  };

  // bg.remove();

  elements.changeSheetBtn.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
        node.remove();
    }
  });

  const uiSidebar = await createIntegratedUi(ctx, {
    position: 'inline',
    anchor: page,
    append: 'first',

    onMount: (sidebar) => {
      return createApp(Sidebar, {elements}).mount(sidebar);
    },
  });
  uiSidebar.mount();
}
