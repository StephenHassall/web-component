// Slot Element example web component
class SlotElement extends HTMLElement {
    // Constructor is called whenever a new SlotElement class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        '<b><slot id="slot-id" name="make-bold"></slot></b><br>' + 
        '<button id="check-ids">Check for IDs (inside)</button>';

        // Bind the check ids button click event to this
        this._checkIdsButtonClick = this._checkIdsButtonClick.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Get check ids button element
        this._checkIdsButtonElement = this.shadowRoot.getElementById('check-ids');

        // Add click event
        this._checkIdsButtonElement.addEventListener('click', this._checkIdsButtonClick);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click event
        this._checkIdsButtonElement.removeEventListener('click', this._checkIdsButtonClick);
    }

    // Check IDs button click event
    _checkIdsButtonClick(event) {
        // Look for slot element
        const slotElement = this.shadowRoot.getElementById('slot-id');

        // Report the result
        if (slotElement !== null) {
            // Log event
            window.customLogEvent('INSIDE: slot element found');
        } else {
            // Log event
            window.customLogEvent('INSIDE: slot element not found');
        }

        // Look for slotted element
        const slottedElement = this.shadowRoot.getElementById('slotted-id');

        // Report the result
        if (slottedElement !== null) {
            // Log event
            window.customLogEvent('INSIDE: slotted element found');
        } else {
            // Log event
            window.customLogEvent('INSIDE: slotted element not found');
        }
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('slot-element', SlotElement);
