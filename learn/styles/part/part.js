// Test what part styles can do
class PartExample extends HTMLElement {
    // Constructor is called whenever a new PartExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<div part="top">Top part text</div>
        <div part="middle">Middle part text</div>
        <div part="middle highlight">Middle part text (highlight)</div>
        <div part="bottom">Bottom part text</div>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('part-example', PartExample);
