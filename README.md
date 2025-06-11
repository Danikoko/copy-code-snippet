# ✂️ copy-code-snippet

**Zero-dependency JavaScript utility** that automatically adds “Copy” buttons to your `<pre><code>` blocks — perfect for blogs, docs, and any site that displays code.

---

## 🚀 Features

-   ✅ Automatically detects and enhances `<pre><code>` blocks
-   ✅ Copies code to clipboard with one click
-   ✅ “Copied!” feedback with optional timeout
-   ✅ Works out of the box — no frameworks required
-   ✅ Fully customizable via options and CSS
-   ✅ **Built-in default styling**, or use your own styles
-   ✅ Tiny footprint & browser-compatible

---

## 🧪 Demo

Try it live: [Demo Page](#)

---

## 📦 Installation

### 🔗 CDN (Recommended for static sites)

```html
<script src="https://cdn.jsdelivr.net/npm/copy-code-snippet@1.0.3"></script>
<script>
    copyCodeSnippet(); // Initializes and applies to all code blocks
</script>
```

### 📦 NPM

```bash
npm install copy-code-snippet
```

```js
import copyCodeSnippet from 'copy-code-snippet';

copyCodeSnippet(); // Or pass options
```

---

## ⚙️ Usage Options

```js
copyCodeSnippet({
    selector: 'pre code', // CSS selector for code blocks
    buttonText: 'Copy', // Button label before copying
    buttonClassName: 'copy-btn', // CSS class for the button
    copiedText: 'Copied!', // Label after click
    timeout: 2000, // Time in ms before reverting label
    position: 'top-right', // Button placement: 'top-right' or 'top-left'
    disableDefaultStyle: false, // Inject default styling automatically (true = disable)
});
```

> **Note:** All options are optional — sensible defaults are applied.

---

## 🎨 Styling Options

### 1️⃣ Use built-in default style

-   The library will automatically inject a default style block unless you set `disableDefaultStyle: true`.
-   This allows quick use with no extra CSS required.

Default styling:

```css
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
```

### 2️⃣ Use your own custom CSS

-   If you want full control over styling:

    -   Set `disableDefaultStyle: true`
    -   Provide your own styles for `.copy-btn`

Example:

```js
copyCodeSnippet({
    disableDefaultStyle: true,
    buttonClassName: 'my-custom-copy-btn',
});
```

```css
.my-custom-copy-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 6px 12px;
    font-size: 14px;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.my-custom-copy-btn:hover {
    background: #0056b3;
}
```

---

## 🧹 Example Markup

```html
<pre>
    <code class="language-js">
        const hello = 'world';
        console.log(hello);
    </code>
</pre>
```

---

## ✅ Browser Support

Fully supported in all modern browsers that implement the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API):

-   Chrome
-   Firefox
-   Safari
-   Edge

---

## 🛠 Contributing

PRs welcome! Whether you're improving performance, adding features, or enhancing styling options — contributions are appreciated.

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

[MIT License](./LICENSE)

---

## 📬 Author

Made with ❤️ by [Daniel Enamudu](https://danikoko.github.io)
GitHub: [@danikoko](https://github.com/danikoko)
Twitter: [@iam_danikoko](https://twitter.com/iam_danikoko)
