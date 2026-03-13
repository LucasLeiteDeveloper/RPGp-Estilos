export function observeUrlChange(pattern: string | RegExp, callbackStart: (url: string) => void, callbackFinish: () => void) {
    let lastUrl = location.href;

    const checkUrl = (url: string) => {
      const isMatch = typeof pattern === 'string' 
        ? url.includes(pattern) 
        : pattern.test(url);
      if (isMatch) {
        callbackStart(url);
      } else {
        callbackFinish();
      }
    };
  
    const observer = new MutationObserver(() => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        checkUrl(currentUrl);
      }
    });
  
    observer.observe(document, { subtree: true, childList: true });

    checkUrl(lastUrl);
  }