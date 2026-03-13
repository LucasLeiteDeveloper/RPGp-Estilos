import { waitForElement } from '@/assets/utils/waitForElement';
import { observeUrlChange } from '@/assets/utils/urlObserver';
import { createPinia } from 'pinia';

import App from '@/components/App.vue';

export default defineContentScript({
  matches: ['*://rpgpedia.com/*'],
  cssInjectionMode: 'manifest',

  async main(ctx: any) {
    observeUrlChange('/ficha/universal/', (url) => { start(ctx); });
  }
});

async function start(ctx: any) {
  const page = await waitForElement('.universal-sheet-page');

  const ui = await createIntegratedUi(ctx, {
    position: 'inline',
    anchor: page,
    append: 'first',

    onMount: (app: any) => {
      const vueApp = createApp(App);
      vueApp.use(createPinia());
      return vueApp.mount(app);
    },
  });
  ui.mount();
}
