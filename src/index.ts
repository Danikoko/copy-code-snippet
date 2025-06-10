export interface CopyOptions {
    selector: string;
    buttonText: string;
    buttonClassName: string;
    copiedText: string;
    timeout: number;
    position: 'top-right' | 'top-left';
    disableDefaultStyle: boolean;
}

const defaultCopyOptions: CopyOptions = {
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

const copyCodeSnippet = (copyOptions: CopyOptions = defaultCopyOptions) => {
    document.querySelectorAll(copyOptions.selector).forEach((block) => {
        const wrapper = block.parentElement;
        /**
         * Check if the targeted element has a parent
         */
        if (wrapper) {
            if (!copyOptions.disableDefaultStyle) {
                injectStyles();
            }
            const button = document.createElement('button');
            button.innerText = copyOptions.buttonText;
            button.className = copyOptions.buttonClassName;

            button.addEventListener('click', () => {
                const text = block.innerHTML;
                navigator.clipboard.writeText(text).then(() => {
                    button.innerText = copyOptions.copiedText;
                    setTimeout(
                        () => (button.innerText = copyOptions.buttonText),
                        copyOptions.timeout
                    );
                });
            });

            wrapper.style.position = 'relative';
            button.style.position = 'absolute';
            button.style.top = '8px';
            if (copyOptions.position === 'top-left') {
                button.style.left = '8px';
            } else {
                button.style.right = '8px';
            }

            wrapper.appendChild(button);
        }
    });
};

export default copyCodeSnippet;
