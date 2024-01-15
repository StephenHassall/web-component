// Slotted Event example web component
class SlottedEvent extends HTMLElement {
    // Constructor is called whenever a new SlottedEvent class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<b><slot id="slot-id" name="make-bold"></slot></b>';

        // Bind the click event to this
        this._click = this._click.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Get slot element
        this._slotElement = this.shadowRoot.getElementById('slot-id');

        // Add click event
        this._slotElement.addEventListener('click', this._click);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click event
        this._slotElement.removeEventListener('click', this._click);
    }

    // Click event
    _click(event) {
        // Log event
        window.customLogEvent('Slotted clicked: ' + event.target.innerText);
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('slotted-event', SlottedEvent);
