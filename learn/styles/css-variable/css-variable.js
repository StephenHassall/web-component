// Test using CSS --variables-abc
class CssVariable extends HTMLElement {
    // Constructor is called whenever a new CssVariable class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
            span {
                background-color: var(--background-color, lightblue);
                color: var(--text-color, black);
            }
        </style>
        <span>Using CSS variables</span>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('css-variable', CssVariable);
