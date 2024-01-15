// Double Placed Slot example web component
class DoublePlacedSlot extends HTMLElement {
    // Constructor is called whenever a new DoublePlacedSlot class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
            '<p>First</p>' +
            '<b><slot name="make-bold"></slot></b><br>' +
            '<p>Second</p>' +
            '<b><slot name="make-bold"></slot></b><br>' +
            '<p>Third</p>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('double-placed-slot', DoublePlacedSlot);
