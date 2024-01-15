// Using property and attribute
class PropertyAttribute extends HTMLElement {
    // Return list of attributes
    static get observedAttributes() {
        return ['name', 'age'];
    }

    // Name getter function
    get name() {
        // If no name attribute
        if (this.hasAttribute('name') === false) return '';

        // Get and return the name attribute value
        return this.getAttribute('name');
    }

    // Name setter function
    set name(value) {
        // If value is null then set it to an empty string
        if (value === null) value = '';
        
        // Set the name attribute value
        this.setAttribute('name', value);
    }

    // Age getter function
    get age() {
        // If no age attribute
        if (this.hasAttribute('age') === false) return 0;

        // Get age attribute value
        const ageValue = this.getAttribute('age');

        // Convert age value and return it
        return parseInt(ageValue);
    }

    // Age setter function
    set age(value) {
        // Set default age value
        let age = '0';

        // If the value is not null
        if (value !== null) age = value.toString();

        // Set age attribute value
        this.setAttribute('age', age);
    }

    // Callback function that the browser calls to inform the custom element that one of its
    // attributes has changed.
    attributeChangedCallback(name, oldValue, newValue) {
        // Update the information
        this._updateInfo();
    }

    // Get name method
    _getName() {
        // Get name attribute value
        const nameValue = this.getAttribute('name');

        // If nothing
        if (!nameValue) return '';

        // Return the name value
        return nameValue;
    }

    // Get age method
    _getAge() {
        // Get age attribute value
        const ageValue = this.getAttribute('age');

        // If nothing then return default
        if (!ageValue) return '0';

        // Convert into an integer
        const age = parseInt(ageValue);

        // Return the age
        return age;
    }

    // Update the text information
    _updateInfo() {
        // Get current values
        const name = this._getName();
        const age = this._getAge();

        // Set HTML
        this.innerHTML =
            `
            <b>name = ${name}</b><br>
            <b>age = ${age}</b><br>
            `;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('property-attribute', PropertyAttribute);
