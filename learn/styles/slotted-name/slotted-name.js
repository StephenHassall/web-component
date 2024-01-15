// Test what slotted styles can do
class SlottedName extends HTMLElement {
    // Constructor is called whenever a new SlottedName class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          slot[name=make-bold]::slotted(*) {
            background-color: red;
          }
          slot[name=make-italic]::slotted(*) {
            background-color: gold;
          }
          slot::slotted(*) {
            background-color: lightblue;
          }
          ::slotted(*) {
            font-size: x-large;
          }
        </style>
        Default: [<slot></slot>]<br>
        <b><slot name="make-bold"></slot></b><br>
        <i><slot name="make-italic"></slot></i>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('slotted-name', SlottedName);
