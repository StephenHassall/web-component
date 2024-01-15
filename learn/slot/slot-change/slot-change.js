// Slot Change example web component
class SlotChange extends HTMLElement {
    // Constructor is called whenever a new SlotChange class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        '<b><slot id="slot-id" name="make-bold"></slot></b>';

        // Bind the slot change event to this
        this._slotchange = this._slotchange.bind(this);

        // Log event
        window.customLogEvent('constructor');
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Log event
        window.customLogEvent('connectedCallback');

        // Get slot element
        this._slotElement = this.shadowRoot.getElementById('slot-id');

        // Add slot change event
        this._slotElement.addEventListener('slotchange', this._slotchange);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Log event
        window.customLogEvent('disconnectedCallback');

        // Remove slot change event
        this._slotElement.removeEventListener('slotchange', this._slotchange);
    }

    // Slot change event
    _slotchange(event) {
        // Log event
        window.customLogEvent('slot change');
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('slot-change', SlotChange);
