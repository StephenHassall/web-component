// This is used to see what happens if the custom element code is loaded
// long after the HTML tag is processed
class DelayedLoad extends HTMLElement {
    constructor() {
        super();
        this.innerText = 'custom element created';
    }
}
customElements.define('delayed-load', DelayedLoad);
