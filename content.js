let universalSheetPage = null;
let div = null;
let container = null;

const observer = new MutationObserver((mutations, obs) => {
    const element = document.querySelector('.universal-sheet-page');
    if (element) {
        container = document.createElement('div');
        container.classList.add('floating-side-bar')
        element.appendChild(container);
        universalSheetPage = element

        obs.disconnect();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

function createSidebar(container) {
    div = document.createElement('div');
    div.classList.add('another-btn');
    container.appendChild(div)
}

const observer2 = new MutationObserver((mutations, obs) => {
    const element = document.querySelector('.back-button[data-v-8b81d767]');
    if (element) {
        container.appendChild(element);
        createSidebar(container);
        obs.disconnect();
    }
});

observer2.observe(document.body, {
    childList: true,
    subtree: true
});

const observer3 = new MutationObserver((mutations, obs) => {
    const element = document.querySelector('.header-buttons-container');
    if (element) {
        div.appendChild(element)
        obs.disconnect();
    }
});

observer3.observe(document.body, {
    childList: true,
    subtree: true
});