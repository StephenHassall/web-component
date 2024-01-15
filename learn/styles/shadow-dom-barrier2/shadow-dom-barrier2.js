// Test what styles can get through the shadow DOM barrier
class WithShadowDom2 extends HTMLElement {
    // Constructor is called whenever a new WithShadowDom2 class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML (into the shadow DOM)
        this.shadowRoot.innerHTML =
        `<style>
          div { background-color: lightblue; }
          .class1 { color: blue; }
          .class2 { color: red; }
        </style>
        <div class="class1">With Shadow DOM (class1)</div>
        <div class="class2">With Shadow DOM (class2)</div>`;
    }
}

class WithoutShadowDom2 extends HTMLElement {
    // Constructor is called whenever a new WithoutShadowDom2 class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Set inner HTML (without having a shadow DOM)
        this.innerHTML =
        `<style>
          div { background-color: lightgray; }
          .class3 { color: orange; }
          .class4 { color: green; }
        </style>
        <div class="class3">Without Shadow DOM (class3)</div> 
        <div class="class4">Without Shadow DOM (class4)</div>`;
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('with-shadow-dom2', WithShadowDom2);
customElements.define('without-shadow-dom2', WithoutShadowDom2);
