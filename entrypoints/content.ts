import { waitForElement } from '@/assets/utils/waitForElement';
import { observeUrlChange } from '@/assets/utils/urlObserver';
import { createPinia } from 'pinia';

import App from '@/components/App.vue';

export default defineContentScript({
  matches: ['*://rpgpedia.com/*'],
  cssInjectionMode: 'manifest',

  async main(ctx: any) {
    observeUrlChange('/ficha/universal/', (url) => { start(ctx, url) }, () => { finish() });
  }
});

let ui: any;

async function start(ctx: any, url: string) {
  const page = await waitForElement('.universal-sheet-page');

  ui = await createIntegratedUi(ctx, {
    position: 'inline',
    anchor: page,
    append: 'first',

    onMount: (app: any) => {
      const vueApp = createApp(App, { activeUrl: url });
      vueApp.use(createPinia());
      vueApp.mount(app);
      return vueApp;
    },

    onRemove: (vueApp: any) => {
      vueApp?.unmount();
    },
  });
  ui.mount();
}

async function finish() {
  document.getElementById('style-ext')?.remove();
  ui?.remove();
}