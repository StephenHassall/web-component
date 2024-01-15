// Look at default slots and text with styles
class DefaultSlotStyle extends HTMLElement {
    // Constructor is called whenever a new DefaultSlotStyle class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          ::slotted(*) {
            font-size: x-large;
            font-style: italic;
            background-color: gold;
          }
        </style>
        <slot></slot>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('default-slot-style', DefaultSlotStyle);
