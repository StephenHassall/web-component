// Test missing slots and styles
class MissingSlots extends HTMLElement {
    // Constructor is called whenever a new MissingSlots class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          #default[empty] {
            display: none;
          }
          #make-bold[empty] {
            display: none;
          }
          #make-italic[empty] {
            display: none;
          }
        </style>
        <div id="default" empty>Default: [<slot id="default-slot"></slot>]</div>
        <div id="make-bold" empty>Bold: <b><slot id="make-bold-slot" name="make-bold"></slot></b></div>
        <div id="make-italic" empty>Italic: <i><slot id="make-italic-slot" name="make-italic"></slot></i></div>`;

        // Bind the slotchange events to this
        this._defaultSlotchange = this._defaultSlotchange.bind(this);
        this._makeBoldSlotchange = this._makeBoldSlotchange.bind(this);
        this._makeItalicSlotchange = this._makeItalicSlotchange.bind(this);
    }

    // Connected callback event function. This is called when the custom element is attached to the DOM
    connectedCallback() {
        // Get elements
        this._defaultSlotElement = this.shadowRoot.getElementById('default-slot');
        this._makeBoldSlotElement = this.shadowRoot.getElementById('make-bold-slot');
        this._makeItalicSlotElement = this.shadowRoot.getElementById('make-italic-slot');

        // Add slot change event
        this._defaultSlotElement.addEventListener('slotchange', this._defaultSlotchange);
        this._makeBoldSlotElement.addEventListener('slotchange', this._makeBoldSlotchange);
        this._makeItalicSlotElement.addEventListener('slotchange', this._makeItalicSlotchange);
    }

    // Disconnected callback event function. This is called when the custom element is detached from the DOM
    disconnectedCallback() {
        // Remove slot change event
        this._defaultSlotElement.removeEventListener('slotchange', this._defaultSlotchange);
        this._makeBoldSlotElement.removeEventListener('slotchange', this._makeBoldSlotchange);
        this._makeItalicSlotElement.removeEventListener('slotchange', this._makeItalicSlotchange);
    }

    // Slot change events
    _defaultSlotchange(event) {
        // Get default element
        const defaultElement = this.shadowRoot.getElementById('default');

        // Get default assigned elements
        const assignedElements = this._defaultSlotElement.assignedElements();

        // If no slotted elements
        if (assignedElements.length === 0) {
            defaultElement.setAttribute('empty', '');            
        } else {
            defaultElement.removeAttribute('empty');
        }
    }
    _makeBoldSlotchange(event) {
        // Get make bold element
        const makeBoldElement = this.shadowRoot.getElementById('make-bold');

        // Get default assigned elements
        const assignedElements = this._makeBoldSlotElement.assignedElements();

        // If no slotted elements
        if (assignedElements.length === 0) {
            makeBoldElement.setAttribute('empty', '');            
        } else {
            makeBoldElement.removeAttribute('empty');
        }
    }
    _makeItalicSlotchange(event) {
        // Get make italic element
        const makeItalicElement = this.shadowRoot.getElementById('make-italic');

        // Get default assigned elements
        const assignedElements = this._makeItalicSlotElement.assignedElements();

        // If no slotted elements
        if (assignedElements.length === 0) {
            makeItalicElement.setAttribute('empty', '');            
        } else {
            makeItalicElement.removeAttribute('empty');
        }
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('missing-slots', MissingSlots);
