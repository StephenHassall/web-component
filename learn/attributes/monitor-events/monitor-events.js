// Simple custom element to log the constructor, connected, disconnected and attribute related events
// The window.customLogEvent must exist globally somewhere first 
class MonitorEvents extends HTMLElement {
    constructor() {
        super();
        window.customLogEvent('constructor');
    }
    connectedCallback() {
        window.customLogEvent('connectedCallback');
    }
    disconnectedCallback() {
        window.customLogEvent('disconnectedCallback');
    }

    static get observedAttributes() {
        window.customLogEvent('observedAttributes');
        return ['test'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        window.customLogEvent('attributeChangedCallback ' + name + ', ' + oldValue + ', ' + newValue);
    }
}
customElements.define('monitor-events', MonitorEvents);
