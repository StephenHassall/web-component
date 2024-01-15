// Test using CSS em font size
class EmFontSize extends HTMLElement {
    // Constructor is called whenever a new EmFontSize class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          .smaller-font {
            font-size: 0.75em;
          }
          .larger-font {
            font-size: 1.25em;
          }
        </style>
        <div class="smaller-font">Smaller font text.</div>
        <div>Normal font text.</div>
        <div class="larger-font">Larger font text.</div>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('em-font-size', EmFontSize);
