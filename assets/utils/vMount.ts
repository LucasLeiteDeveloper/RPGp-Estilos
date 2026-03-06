export const vMount = (el: HTMLElement, binding: { value: HTMLElement }) => {
    el.appendChild(binding.value);
};