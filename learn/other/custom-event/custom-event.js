// Working with custom events
class CustomEventExample extends HTMLElement {
    // Constructor is called whenever a new CustomEventExample class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          :host {
            display: inline-block;
          }
        </style>
        <div id="count">0</div>
        <button id="plus">Add</button>
        <button id="minus">Minus</button>
        <button id="clear">Clear</button>`;

        // Bind the click event functions to the "this" object
        this._plusClickEvent = this._plusClickEvent.bind(this);
        this._minusClickEvent = this._minusClickEvent.bind(this);
        this._clearClickEvent = this._clearClickEvent.bind(this);

        // Set count to zero
        this._count = 0;
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Get count element to be used later
        this._countElement = this.shadowRoot.getElementById('count');

        // Get the button elements
        this._plusElement = this.shadowRoot.getElementById('plus');
        this._minusElement = this.shadowRoot.getElementById('minus');
        this._clearElement = this.shadowRoot.getElementById('clear');

        // Add click events
        this._plusElement.addEventListener('click', this._plusClickEvent);
        this._minusElement.addEventListener('click', this._minusClickEvent);
        this._clearElement.addEventListener('click', this._clearClickEvent);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click events
        this._plusElement.removeEventListener('click', this._plusClickEvent);
        this._minusElement.removeEventListener('click', this._minusClickEvent);
        this._clearElement.removeEventListener('click', this._clearClickEvent);
    }

    // Plus click event
    _plusClickEvent(event) {
        // Update count
        this._count++;
        this._countElement.innerText = this._count.toString();

        // If odd
        if (this._count % 2) {
            // Create odd event
            const oddEvent = new CustomEvent('odd', { detail: this._count });

            // Dispatch the event
            this.dispatchEvent(oddEvent);
        } else {
            // Create even event
            let evenEvent = new CustomEvent('even', { detail: this._count });

            // Dispatch the event
            this.dispatchEvent(evenEvent);
        }
    }

    // Minus click event
    _minusClickEvent(event) {
        // Update count
        this._count--;
        this._countElement.innerText = this._count.toString();

        // If odd
        if (this._count % 2) {
            // Create odd event
            let oddEvent = new CustomEvent('odd', { detail: this._count });

            // Dispatch the event
            this.dispatchEvent(oddEvent);
        } else {
            // Create even event
            let evenEvent = new CustomEvent('even', { detail: this._count });

            // Dispatch the event
            this.dispatchEvent(evenEvent);
        }
    }

    // Clear click event
    _clearClickEvent(event) {
        // Update count
        this._count = 0;
        this._countElement.innerText = '';

        // Create clear event
        const clearEvent = new CustomEvent('clear');

        // Dispatch the event
        this.dispatchEvent(clearEvent);
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('custom-event-example', CustomEventExample);
