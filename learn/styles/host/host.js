// Test what host styles can do
class HostExample extends HTMLElement {
    // Constructor is called whenever a new HostExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML (into the shadow DOM)
        this.shadowRoot.innerHTML =
        `<style>
          :host {
            background-color: red;
          }
          :host([attribute-set]) {
            background-color: lightblue;
          }
          :host([attribute-value=good]) {
            background-color: gold;
          }
          :host([attribute-used]:not([attribute-not-used])) {
            background-color: green;
            color: white;
          }
          :host(.class-outer1) {
            background-color: lightgreen;
          }
          :host-context(.class-outer2) {
            background-color: darkorange;
          }
          :host-context(h2) {
            background-color: violet;
          }
        </style>
        Host Example.`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('host-example', HostExample);
