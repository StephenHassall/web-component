// The class linked to the tag is derived from a HTML Element class
class MyTag extends HTMLElement {
    // Constructor is called whenever a new MyTag class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Set the inner text of the element to the current date and time
        this.innerText = new Date().toLocaleString();
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('my-tag', MyTag);
