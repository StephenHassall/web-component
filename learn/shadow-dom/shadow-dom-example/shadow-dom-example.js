// Simple example of a shadow DOM
class ShadowDomExample extends HTMLElement {
    // Constructor is called whenever a new ShadowDomExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<p><b>Shadom DOM Example</b></p><p>I exist in my own DOM.</p>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('shadow-dom-example', ShadowDomExample);
