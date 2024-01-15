// Derived from the <button is="custom-paragraph"> element
class CustomParagraphElement extends HTMLParagraphElement {
    constructor() {
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<div>custom paragraph</div>';
    }
}
customElements.define('custom-paragraph', CustomParagraphElement, { extends: 'p'});

// Derived from the <a is="custom-a"> element
class CustomAnchorElement extends HTMLAnchorElement {
    constructor() {
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<div>custom anchor</div>';
    }
}
customElements.define('custom-a', CustomAnchorElement, { extends: 'a'});
