// Assigned Elements example web component
class AssignedElements extends HTMLElement {
    // Constructor is called whenever a new AssignedElements class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        '<b><slot id="slot-id" name="make-bold"></slot></b><br>' + 
        '<button id="assigned-slots">Get Assigned Slots</button>';

        // Bind the assigned slots button click event to this
        this._assignedSlotsButtonClick = this._assignedSlotsButtonClick.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Get assigned slots button element
        this._assignedSlotsButtonElement = this.shadowRoot.getElementById('assigned-slots');

        // Add click event
        this._assignedSlotsButtonElement.addEventListener('click', this._assignedSlotsButtonClick);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click event
        this._assignedSlotsButtonElement.removeEventListener('click', this._assignedSlotsButtonClick);
    }

    // Assigned slots button click event
    _assignedSlotsButtonClick(event) {
        // Look for slot element
        const slotElement = this.shadowRoot.getElementById('slot-id');

        // Get assigned elements
        const assignedElements = slotElement.assignedElements();

        // For each assigned element
        assignedElements.forEach(element => {
            // Log event
            window.customLogEvent(element.nodeName + ': ' + element.innerText);
        });
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('assigned-elements', AssignedElements);
