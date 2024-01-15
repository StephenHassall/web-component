// This is the base custom element
class BaseCustomElement extends HTMLElement {
    constructor() {
        super();
        this.style.backgroundColor = 'lightgray'
        this.innerText = 'base custom element';
    }
}
customElements.define('base-custom-element', BaseCustomElement);

// Derived from <base-custom-element> element
class DerivedCustomElement extends BaseCustomElement {
    constructor() {
        super();
        this.innerText = 'derived custom element';
    }
}
customElements.define('derived-custom-element', DerivedCustomElement);
