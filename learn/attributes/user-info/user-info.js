// Simple attributes example
class UserInfo extends HTMLElement {
    // Callback function that the browser calls to get a list of all the attributes
    // this custom element is using. Note that it is "static"
    static get observedAttributes() {
        return ['first-name', 'last-name'];
    }

    // Callback function that the browser calls to inform the custom element that one of its
    // attributes has changed.
    attributeChangedCallback(name, oldValue, newValue) {
        // As we are only looking for first-name and last-name, we do not need
        // to check the name parameter.

        // Get first and last name attributes
        const firstName = this.getAttribute('first-name');
        const lastName = this.getAttribute('last-name');

        // Set the inner HTML to show the user name
        this.innerHTML = '<b>Name:</b> ' + firstName + ' ' + lastName;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('user-info', UserInfo);
