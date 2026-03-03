export default defineBackground(() => {
  browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' || changeInfo.url) {
      browser.tabs.sendMessage(tabId, {
        type: 'URL_CHANGED',
        url: changeInfo.url,
      });
    }
  });
});
