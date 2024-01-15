// Slot example web component
class SlotExample extends HTMLElement {
    // Constructor is called whenever a new SlotExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<b><slot name="make-bold"></slot></b>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('slot-example', SlotExample);
