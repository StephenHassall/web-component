// Working with composed events
class ComposedChildEventExample extends HTMLElement {
    // Constructor is called whenever a new ComposedChildEventExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `
        <button>Click Test</button>
        <button id="internal">Internal Test</button>
        <button id="external">External Test</button>
        `;

        // Bind the click event functions to the "this" object
        this._internalClickEvent = this._internalClickEvent.bind(this);
        this._externalClickEvent = this._externalClickEvent.bind(this);

        // Get the button elements
        this._internalElement = this.shadowRoot.getElementById('internal');
        this._externalElement = this.shadowRoot.getElementById('external');
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Add click events
        this._internalElement.addEventListener('click', this._internalClickEvent);
        this._externalElement.addEventListener('click', this._externalClickEvent);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click events
        this._internalElement.removeEventListener('click', this._internalClickEvent);
        this._externalElement.removeEventListener('click', this._externalClickEvent);
    }

    // Internal click event
    _internalClickEvent(event) {
        // Stop the click event moving up the DOM
        event.stopPropagation();

        // Log the internal click happened
        window.customLogEvent('CHILD: internal test');

        // Create test event
        const testEvent = new CustomEvent('test');

        // Dispatch the event
        this.dispatchEvent(testEvent);
    }

    // External click event
    _externalClickEvent(event) {
        // Stop the click event moving up the DOM
        event.stopPropagation();

        // Log the internal click happened
        window.customLogEvent('CHILD: external test');

        // Create test event (this can bubble through the shadow DOM)
        const testEvent = new CustomEvent('test', { bubbles: true, composed: true });

        // Dispatch the event
        this.dispatchEvent(testEvent);
    }
}

class ComposedParentEventExample extends HTMLElement {
    // Constructor is called whenever a new ComposedParentEventExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<composed-child-event-example id="child"></composed-child-event-example>`;

        // Bind the click event functions to the "this" object
        this._childTestEvent = this._childTestEvent.bind(this);
        this._childClickEvent = this._childClickEvent.bind(this);

        // Get the element
        this._childTestElement = this.shadowRoot.getElementById('child');
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Add test events
        this._childTestElement.addEventListener('test', this._childTestEvent);
        this._childTestElement.addEventListener('click', this._childClickEvent);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click events
        this._childTestElement.removeEventListener('test', this._childTestEvent);
        this._childTestElement.removeEventListener('click', this._childClickEvent);
    }

    // Child test event
    _childTestEvent() {
        // Log the internal click happened
        window.customLogEvent('PARENT: test');
    }

    // Chicl click event
    _childClickEvent() {
        // Log the internal click happened
        window.customLogEvent('PARENT: click');
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('composed-child-event-example', ComposedChildEventExample);
customElements.define('composed-parent-event-example', ComposedParentEventExample);
