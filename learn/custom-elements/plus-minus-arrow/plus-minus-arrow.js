// This is used to show what happens when you use arrow functions with events
class PlusMinusArrow extends HTMLElement {
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
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Log event
        window.customLogEvent('connectedCallback');

        // If we have not yet added the internal elements
        if (this._addedElements === false) {
            // Set the internal HTML elements
            this.innerHTML = '<div id="count">0</div><button id="add">Add</button><button id="minus">Minus</button>'

            // Set flag that we have added the elements (so we do not add them again)
            this._addedElements = true;            
        }

        // Get count element to be used later
        this._countElement = document.getElementById('count');

        // Get the plus and minus elements
        this._plusElement = document.getElementById('add');
        this._minusElement = document.getElementById('minus');

        // Add click events
        this._plusElement.addEventListener('click', (event) => {
            this._count++;
            this._countElement.innerText = this._count.toString();    
        });
        this._minusElement.addEventListener('click', (event) => {
            this._count--;
            this._countElement.innerText = this._count.toString();    
        });
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Log event
        window.customLogEvent('disconnectedCallback');
    }

}
customElements.define('plus-minus-arrow', PlusMinusArrow);
