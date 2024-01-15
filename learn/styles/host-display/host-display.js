// Test different host display styles
class HostDisplayDefault extends HTMLElement {
    // Constructor is called whenever a new HostDisplayDefault class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
          :host {
            background-color: lightblue;
            border: 4px solid blue;
            font-size: x-large;
          }
        </style>
        <div>Host display defaults to inline.</div>`;
    }
}

class HostDisplayInlineBlock extends HTMLElement {
  // Constructor is called whenever a new HostDisplayInlineBlock class is created
  constructor() {
      // We must always call super in the constructor
      super();

      // Attach shadow DOM root
      this.attachShadow({ mode: 'open' });

      // Set inner HTML
      this.shadowRoot.innerHTML =
      `<style>
        :host {
          display: inline-block;
          background-color: lightblue;
          border: 4px solid blue;
          font-size: x-large;
        }
      </style>
      <div>Host display inline-block.</div>`;
  }
}

class HostDisplayBlock extends HTMLElement {
  // Constructor is called whenever a new HostDisplayBlock class is created
  constructor() {
      // We must always call super in the constructor
      super();

      // Attach shadow DOM root
      this.attachShadow({ mode: 'open' });

      // Set inner HTML
      this.shadowRoot.innerHTML =
      `<style>
        :host {
          display: block;
          background-color: lightblue;
          border: 4px solid blue;
          font-size: x-large;
        }
      </style>
      <div>Host display block.<div>`;
  }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('host-display-default', HostDisplayDefault);
customElements.define('host-display-inline-block', HostDisplayInlineBlock);
customElements.define('host-display-block', HostDisplayBlock);
