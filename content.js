const masterObserver = new MutationObserver((mutations, obs) => {
    
    const sheetPage = document.querySelector('.universal-sheet-page');
    if (sheetPage && !container) {
        container = document.createElement('div');
        container.classList.add('floating-side-bar');
        sheetPage.appendChild(container);
    }

    if (container && !div) {
        const backButton = document.querySelector('.back-button[data-v-8b81d767]');
        if (backButton) {
            container.appendChild(backButton);
            div = document.createElement('div');
            div.classList.add('another-btn');
            container.appendChild(div);
        }
    }

    if (div) {
        const headerBtns = document.querySelector('.header-buttons-container');
        if (headerBtns) {
            div.appendChild(headerBtns);
            obs.disconnect();
        }
    }
});

let container = null;
let div = null;
masterObserver.observe(document.body, { childList: true, subtree: true });