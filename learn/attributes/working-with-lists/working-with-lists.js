// Using lists
class WorkingWithLists extends HTMLElement {
    constructor() {
        // We must always call super in the constructor
        super();

        // Create the list
        this._list = [];
    }

    // List getter function
    get list() {
        // Return the list object
        return this._list;
    }

    // List setter function
    set list(value) {
        // Set the list
        this._list = value;
    }

    // Public method to update the list
    update() {
        // Update the list
        this._updateList();        
    }

    // Connected callback function
    connectedCallback() {
        // Update this list, just in case we already have some list items
        // when the custom element is added to the DOM
        this._updateList();
    }

    // Update the list
    _updateList() {
        // Set HTML builder
        let htmlBuilder = [];

        // Add starting parts
        htmlBuilder.push('<ol>');

        // For each list item
        this._list.forEach(item => {
            htmlBuilder.push('<li>' + item + '</li>');
        });

        // Add ending parts
        htmlBuilder.push('</ol>');

        // Set HTML
        this.innerHTML = htmlBuilder.join('');
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('working-with-lists', WorkingWithLists);
