// Monitoring standard attribute changes
class StandardAttributes extends HTMLElement {
    connectedCallback() {
        // Set inner text
        this.innerText = 'standard-attributes';
    }

    // Return list of attributes
    static get observedAttributes() {
        return ['id', 'class', 'style'];
    }

    // Callback function that the browser calls to inform the custom element that one of its
    // attributes has changed.
    attributeChangedCallback(name, oldValue, newValue) {
        window.customLogEvent('attributeChangedCallback ' + name + ', ' + oldValue + ', ' + newValue);
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('standard-attributes', StandardAttributes);
