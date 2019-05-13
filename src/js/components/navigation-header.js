(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationHeader = class NavigationHeader extends HTMLElement {
    static get observedAttributes() {
      return ['name'];
    }

    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.header = document.createElement('header');
      this.heading = document.createElement('h1');
      this.header.appendChild(this.heading);
      this.root.appendChild(this.header);
    }

    connectedCallback() {
      console.log('__ LOGGING OUT `arguments`', arguments);
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.log('__ INSIDE `attributeChangedCallback`', name, oldValue, newValue);
      this.heading.innerText = newValue;
    }
  }

})();
