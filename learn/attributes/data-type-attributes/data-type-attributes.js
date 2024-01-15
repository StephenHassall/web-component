// Different data types and attributes example
class DataTypeAttributes extends HTMLElement {
    // Return list of attributes
    static get observedAttributes() {
        return ['text', 'integer', 'number', 'date', 'boolean'];
    }

    // Callback function that the browser calls to inform the custom element that one of its
    // attributes has changed.
    attributeChangedCallback(name, oldValue, newValue) {
        // Update the information
        this._updateInfo();
    }

    // Public method to set the text attribute to something random
    setRandomText() {
        // Set character list
        const charList = 'abcdefghijklmnopqrstuvwxyz';

        // Set text list
        let textList = [];

        // For each character
        for (let count = 0; count < 10; count++) {
            // Add random character to text list
            textList.push(charList.charAt(Math.random() * charList.length));
        }

        // Set text attribute
        this.setAttribute('text', textList.join(''));
    }

    // Public method to set the integer attribute to something random
    setRandomInteger() {
        // Make a random integer
        const randomInteger = Math.floor(Math.random() * 1000000);

        // Set integer attribute
        this.setAttribute('integer', randomInteger.toString());
    }

    // Public method to set the number attribute to something random
    setRandomNumber() {
        // Make a random number
        const randomNumber = (Math.random() * 1000000);

        // Set number attribute
        this.setAttribute('number', randomNumber.toFixed(4));
    }

    // Public method to set the date attribute to something random
    setRandomDate() {
        // Create random date
        const randomDate = new Date((new Date()) - Math.floor(Math.random() * 10000000000));

        // Set date attribute
        this.setAttribute('date', randomDate.toISOString());
    }

    // Public method to switch the boolean attribute
    switchBoolean() {
        // If the attribute exists
        if (this.hasAttribute('boolean') === true) {
            // Remove the attribute
            this.removeAttribute('boolean');
        } else {
            // Add the attribute (without a value)
            this.setAttribute('boolean', '');
        }
    }

    // Get text method
    _getText() {
        // Get text attribute value
        const textValue = this.getAttribute('text');

        // If nothing then return default
        if (!textValue) return '';

        // Return the text value
        return textValue;
    }

    // Get integer method
    _getInteger() {
        // Get integer attribute value
        const integerValue = this.getAttribute('integer');

        // If nothing then return default
        if (!integerValue) return 0;

        // Convert into an integer
        const integer = parseInt(integerValue);

        // If not a valid number
        if (isNaN(integer) === true) return 0;

        // Return the integer
        return integer;
    }

    // Get number method
    _getNumber() {
        // Get number attribute value
        const numberValue = this.getAttribute('number');

        // If nothing then return default
        if (!numberValue) return 0;

        // Convert into a number
        const number = parseFloat(numberValue);

        // If not a valid number
        if (isNaN(number) === true) return 0;

        // Return the number
        return number;
    }

    // Get date method
    _getDate() {
        // Get date attribute value
        const dateValue = this.getAttribute('date');

        // If nothing then return default
        if (!dateValue) return null;

        // Parse the ISO date into milliseconds
        const dateMilliseconds = Date.parse(dateValue);

        // Convert into a date
        const date = new Date(dateMilliseconds);

        // Return the date
        return date;
    }

    // Get boolean method
    _getBoolean() {
        // If has attribute then return true value
        if (this.hasAttribute('boolean') === true) return true;

        // Otherwise return false value
        return false;
    }

    // Update the text information
    _updateInfo() {
        // Get current values
        const text = this._getText();
        const integer = this._getInteger();
        const number = this._getNumber();
        const date = this._getDate();
        const boolean = this._getBoolean();

        // Set HTML
        this.innerHTML =
            `
            <b>text = ${text}</b><br>
            <b>integer = ${integer}</b><br>
            <b>number = ${number}</b><br>
            <b>date = ${date}</b><br>
            <b>boolean = ${boolean}</b><br>
            `;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('data-type-attributes', DataTypeAttributes);
