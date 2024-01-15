// Testing how to make a web component tell a form its value so it can be submit
class FormInvalidValue extends HTMLElement {
    // State that this web component is form associated (acts like an input)
    static get formAssociated() { return true; }

    // Constructor is called whenever a new FormInvalidValue class is created
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
        <div id="random" tabindex="0">????</div>`;

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

        // By default the value is missing
        this._internals.setValidity(
            {
                valueMissing: true
            },
            'Random value not yet set',
            this._randomElement);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove click events
        this._randomElement.randomEventListener('click', this._clickEvent);
    }

    // Click event
    _clickEvent(event) {
        // Create random number
        const randomNumber = Math.floor(Math.random() * 100000000);

        // Set random element with number
        this._randomElement.innerText = randomNumber.toString();

        // Set the forms value for this web component
        this._internals.setFormValue(randomNumber);

        // If random number is odd
        if (randomNumber % 2) {
            // Set error to be shown if form submitted
            this._internals.setValidity(
                {
                    typeMismatch: true
                },
                'Random value is not even',
                this._randomElement);
        } else {
            // Value is valid so set nothing wrong
            this._internals.setValidity({});    
        }
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('form-invalid-value', FormInvalidValue);
