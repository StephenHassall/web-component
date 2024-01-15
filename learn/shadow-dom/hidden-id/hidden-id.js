// Simple example of a shadow DOM
class HiddenId extends HTMLElement {
    // Constructor is called whenever a new HiddenId class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML = '<p id="result">Number = ?</p><button id="button">Change Text</button>';

        // Get result element
        this._resultElement = this.shadowRoot.getElementById('result');

        // Get button element
        this._buttonElement = this.shadowRoot.getElementById('button');

        // Bind the button click event function to this
        this._buttonClickEvent = this._buttonClickEvent.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Add button click event
        this._buttonElement.addEventListener('click', this._buttonClickEvent);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove button click event
        this._buttonElement.removeEventListener('click', this._buttonClickEvent);
    }

    // Button click event
    _buttonClickEvent(event) {
        // Set random number result
        this._resultElement.innerText = 'Number = ' + (Math.random() * 100000).toString();
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('hidden-id', HiddenId);
