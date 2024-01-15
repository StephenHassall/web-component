// Simple custom element to log the constructor, connected and disconnected
// events. The window.customLogEvent must exist globally somewhere first 
class ConnectedDisconnected extends HTMLElement {
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
}
customElements.define('connected-disconnected', ConnectedDisconnected);
