// Test what styles can get through the shadow DOM barrier
class WithShadowDom3 extends HTMLElement {
    // Constructor is called whenever a new WithShadowDom3 class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML (into the shadow DOM)
        this.shadowRoot.innerHTML =
        `<style>
          .class-inner {
            color: green;
            background-color: lightblue;
            border: 4px solid red;
          }
        </style>
        <p class="class-inner">With Shadow DOM (with styles)</p>
        <p>With Shadow DOM (without styles)</p>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('with-shadow-dom3', WithShadowDom3);
