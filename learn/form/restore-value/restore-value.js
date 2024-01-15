// Testing how to make a web component restores its value when back button is pressed
class FormRestoreValue extends HTMLElement {
    // State that this web component is form associated (acts like an input)
    static get formAssociated() { return true; }

    // Constructor is called whenever a new FormRestoreValue class is created
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
            font-size: x-large;
            cursor: pointer;
            user-select: none;
          }
        </style>
        <div id="random">????</div>`;

        // Create attach internals object
        this._internals = this.attachInternals();

        // Bind the click event functions to the "this" object
        this._clickEvent = this._clickEvent.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Get random element
        this._randomElement = this.shadowRoot.getElementById('random');

        // Add click events
        this._randomElement.addEventListener('click', this._clickEvent);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click events
        this._randomElement.randomEventListener('click', this._clickEvent);
    }

    // Form state restore callback function. This is called if there was data that from it that could be restored (when page refreshed) 
    formStateRestoreCallback(state, mode) {
        // Set random element with number
        this._randomElement.innerText = state;

        // Set the forms value for this web component
        this._internals.setFormValue(state);
    }

    // Click event
    _clickEvent(event) {
        // Create random number
        const randomNumber = Math.floor(Math.random() * 100000000);

        // Set random element with number
        this._randomElement.innerText = randomNumber.toString();

        // Set the forms value for this web component
        this._internals.setFormValue(randomNumber);
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('form-restore-value', FormRestoreValue);
