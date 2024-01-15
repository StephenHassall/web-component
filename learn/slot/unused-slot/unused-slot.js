// Unused Slot example web component
class UnusedSlot extends HTMLElement {
    // Constructor is called whenever a new UnusedSlot class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        '<b><slot name="make-bold"></slot></b><br>' + 
        '<i><slot name="make-italic"></slot></i><br>' +
        'default text is = [<slot></slot>]';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('unused-slot', UnusedSlot);
