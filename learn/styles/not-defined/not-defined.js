// Look at not defined slots and how to hide them
class NotDefined extends HTMLElement {
    // Constructor is called whenever a new NotDefined class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<slot></slot>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('not-defined', NotDefined);
