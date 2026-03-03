export function observeUrlChange(pattern: string | RegExp, callback: (url: string) => void) {
    let lastUrl = location.href;

    const checkUrl = (url: string) => {
      const isMatch = typeof pattern === 'string' 
        ? url.includes(pattern) 
        : pattern.test(url);
      if (isMatch) {
        callback(url);
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

    return () => observer.disconnect();
  }