// Default slot example web component
class DefaultSlot extends HTMLElement {
    // Constructor is called whenever a new DefaultSlot class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<p>Before slot.</p><slot></slot><p>After slot.</p>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('default-slot', DefaultSlot);
