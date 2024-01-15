// Test what styles can get through the shadow DOM barrier
class WithShadowDom1 extends HTMLElement {
    // Constructor is called whenever a new WithShadowDom1 class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Attach shadow DOM root
        this.attachShadow({ mode: 'open' });

        // Set inner HTML (into shadow DOM)
        this.shadowRoot.innerHTML ='<div>With Shadow DOM</div><div class="test">Test class text.</div>';
    }
}

class WithoutShadowDom1 extends HTMLElement {
    // Constructor is called whenever a new WithoutShadowDom1 class is created
    constructor() {
        // We must always call super in the constructor
        super();

        // Set inner HTML (without having a shadow DOM)
        this.innerHTML = '<div>Without Shadow DOM</div><div class="test">Test class text.</div>';
    }
}

// Tell the browser about the new tag and the class it is linked to
customElements.define('with-shadow-dom1', WithShadowDom1);
customElements.define('without-shadow-dom1', WithoutShadowDom1);
