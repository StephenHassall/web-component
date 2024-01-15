// Testing how to make a web component a disabled input
class FormDisabledValue extends HTMLElement {
    // State that this web component is form associated (acts like an input)
    static get formAssociated() { return true; }

    // Constructor is called whenever a new FormDisabledValue class is created
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
          #random[disabled] {
            color: lightgray;
            cursor: default;
          }
        </style>
        <div id="random">????</div>`;

        // Create attach internals object
        this._internals = this.attachInternals();

        // Bind the click event functions to the "this" object
        this._clickEvent = this._clickEvent.bind(this);

        // Set not disabled
        this._disabled = false;
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

    // Form disabled callback function. This is called if the element or fieldset it belongs to is disabled
    formDisabledCallback(disabled) {
        // Set disabled value
        this._disabled = disabled;

        // If disabled
        if (disabled === true) {
            // Add disabled attribute
            this._randomElement.setAttribute('disabled','');
        } else {
            // Remove disabled attribute
            this._randomElement.removeAttribute('disabled');
        }
    }

    // Click event
    _clickEvent(event) {
        // If disabled then do nothing
        if (this._disabled === true) return;

        // Create random number
        const randomNumber = Math.floor(Math.random() * 100000000);

        // Set random element with number
        this._randomElement.innerText = randomNumber.toString();

        // Set the forms value for this web component
        this._internals.setFormValue(randomNumber);
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('form-disabled-value', FormDisabledValue);
