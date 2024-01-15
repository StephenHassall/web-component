// Derived from the <a is="custom-a"> element
class CustomAnchorElement extends HTMLAnchorElement {
    constructor() {
        super();

        // Set inner text
        this.innerText = 'Custom anchor element';

        // Set HREF
        this.href = '/';
    }
}
customElements.define('custom-a', CustomAnchorElement, { extends: 'a'});

// Derived from the <button is="custom-button"> element
class CustomButtonElement extends HTMLButtonElement {
    constructor() {
        super();

        // Set inner text
        this.innerText = 'Custom button element';
    }
}
customElements.define('custom-button', CustomButtonElement, { extends: 'button'});

// Derived from the <input is="custom-input"> element
class CustomInputElement extends HTMLInputElement {
    constructor() {
        super();

        // Set inner text
        this.placeholder = 'input custom element';
    }
}
customElements.define('custom-input', CustomInputElement, { extends: 'input'});
