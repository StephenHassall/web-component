// Test what slotted styles can do
class SlottedExample extends HTMLElement {
    // Constructor is called whenever a new SlottedExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          ::slotted(*) {
            background-color: red;
            font-size: x-large;
          }
          ::slotted(.slot-class) {
            background-color: gold;
          }
          ::slotted([attribute-set]) {
            background-color: lightblue;
          }
          ::slotted([attribute-value=good]) {
            background-color: darkorange;
          }
          ::slotted(p) {
            background-color: lightgreen;
          }
          ::slotted([test7])::before {
            content: '<';
            background-color: aqua;
          }
          ::slotted([test8])::after {
            content: '>';
            background-color: pink;
          }
          ::slotted([test9]:hover) {
            background-color: gray;
            color: white;
          }
        </style>
        <slot></slot>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('slotted-example', SlottedExample);
