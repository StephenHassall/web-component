// Looking into an open and closed shadow DOM

// Open shadow DOM
class OpenShadowDom extends HTMLElement {
    // Constructor is called whenever a new OpenShadowDom class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<div>Open shadow DOM</div>';
    }
}

// Closed shadow DOM
class ClosedShadowDom extends HTMLElement {
    // Constructor is called whenever a new ClosedShadowDom class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root (returns the shadow root object)
        const shadowRoot = this.attachShadow({ mode: 'closed' });

        // Because the shadow DOM is closed the shadowRoot property is always null
        // therefore we need to use the returned shadowRoot variable instead

        // Set inner HTML
        shadowRoot.innerHTML = '<div>Closed shadow DOM</div>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('open-shadow-dom', OpenShadowDom);
customElements.define('closed-shadow-dom', ClosedShadowDom);
