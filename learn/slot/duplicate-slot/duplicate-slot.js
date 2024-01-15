// Duplicate Slot example web component
class DuplicateSlot extends HTMLElement {
    // Constructor is called whenever a new DuplicateSlot class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
            '<p>Before slot.</p>' + 
            '<b><slot name="make-bold"></slot></b>' + 
            '<p>After slot.</p>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('duplicate-slot', DuplicateSlot);
