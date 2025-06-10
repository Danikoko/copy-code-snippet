const defaultCopyOptions = {
    selector: 'pre code',
    buttonText: 'Copy',
    buttonClassName: 'copy-btn',
    copiedText: 'Copied!',
    timeout: 1000,
    position: 'top-right',
    disableDefaultStyle: false,
};
const injectStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
    .copy-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 5px 10px;
      font-size: 12px;
      background: #333;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      z-index: 100;
    }
    .copy-btn:hover {
      background: #555;
    }
  `;
    document.head.appendChild(style);
};
const copyCodeSnippet = (copyOptions = {}) => {
    const options = { ...defaultCopyOptions, ...copyOptions };
    document.querySelectorAll(options.selector).forEach((block) => {
        const wrapper = block.parentElement;
        /**
         * Check if the targeted element has a parent
         */
        if (wrapper) {
            if (!options.disableDefaultStyle) {
                injectStyles();
            }
            const button = document.createElement('button');
            button.innerText = options.buttonText;
            button.className = options.buttonClassName;
            button.addEventListener('click', () => {
                const text = block.innerHTML;
                navigator.clipboard.writeText(text).then(() => {
                    button.innerText = options.copiedText;
                    setTimeout(() => (button.innerText = options.buttonText), options.timeout);
                });
            });
            wrapper.style.position = 'relative';
            button.style.position = 'absolute';
            button.style.top = '8px';
            if (options.position === 'top-left') {
                button.style.left = '8px';
            }
            else {
                button.style.right = '8px';
            }
            wrapper.appendChild(button);
        }
    });
};
export default copyCodeSnippet;
