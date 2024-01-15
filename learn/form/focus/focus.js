// Test delegateFocus setting
class WithDelegateFocus extends HTMLElement {
    // State that this web component is form associated (acts like an input)
    static get formAssociated() { return true; }

    // Constructor is called whenever a new WithDelegateFocus class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open', delegatesFocus: true });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
            :host(:focus) {
                border: 4px solid gold;
            }
            :host {
                display: inline-block;
                background-color: lightblue;
            }
        </style>
        <div>
            <div>Shadow DOM with delegateFocus = true</div>
            <label for="input1">Input 1</label>
            <input type="text" id="input1"><br>
            <label for="input2">Input 2</label>
            <input type="text" id="input2">
        </div>`;
    }
}

class WithoutDelegateFocus extends HTMLElement {
    // State that this web component is form associated (acts like an input)
    static get formAssociated() { return true; }

    // Constructor is called whenever a new WithoutDelegateFocus class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open', delegatesFocus: false });

        // Set inner HTML
        this.shadowRoot.innerHTML =
        `<style>
            :host(:focus) {
                border: 4px solid gold;
            }
            :host {
                display: inline-block;
                background-color: darkorange;
            }
        </style>
        <div>
            <div>Shadow DOM with delegateFocus = false</div>
            <label for="input3">Input 3</label>
            <input type="text" id="input3"><br>
            <label for="input4">Input 4</label>
            <input type="text" id="input4">
        </div>`;
  }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('with-delegate-focus', WithDelegateFocus);
customElements.define('without-delegate-focus', WithoutDelegateFocus);
