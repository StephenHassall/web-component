// This is used to show when to add and remove click events.
class PlusMinus extends HTMLElement {
    // Constructor function. This is called when the custom element is created
    constructor() {
        // Must call super first
        super();

        // Log event
        window.customLogEvent('constructor');

        // Set the count value. This will be increased/decreased when the plus/minus buttons are pressed
        this._count = 0;

        // Set the added elements flag
        this._addedElements = false;  
        
        // Bind the click event functions to the "this" object
        this._plusClickEvent = this._plusClickEvent.bind(this);
        this._minusClickEvent = this._minusClickEvent.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Log event
        window.customLogEvent('connectedCallback');

        // If we have not yet added the internal elements
        if (this._addedElements === false) {
            // Set the internal HTML elements
            this.innerHTML = '<div id="count">0</div><button id="add">Add</button><button id="minus">Minus</button>';

            // Set flag that we have added the elements (so we do not add them again)
            this._addedElements = true;            
        }

        // Get count element to be used later
        this._countElement = document.getElementById('count');

        // Get the plus and minus elements
        this._plusElement = document.getElementById('add');
        this._minusElement = document.getElementById('minus');

        // Add click events
        this._plusElement.addEventListener('click', this._plusClickEvent);
        this._minusElement.addEventListener('click', this._minusClickEvent);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // If we are removing the plus minus events
        if (window.plusMinusRemoveClickEvent === true) {
            // Log event
            window.customLogEvent('disconnectedCallback (with remove click events)');

            // Remove click events
            this._plusElement.removeEventListener('click', this._plusClickEvent);
            this._minusElement.removeEventListener('click', this._minusClickEvent);
        } else {
            // Log event
            window.customLogEvent('disconnectedCallback (without remove click events)');
        }
    }

    // Plus click event
    _plusClickEvent(event) {
        this._count++;
        this._countElement.innerText = this._count.toString();
    }

    // Minus click event
    _minusClickEvent(event) {
        this._count--;
        this._countElement.innerText = this._count.toString();
    }
}
customElements.define('plus-minus', PlusMinus);
