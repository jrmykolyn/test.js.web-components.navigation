(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationHeader = class NavigationHeader extends window.__CORE__.MyEmitterComponent {
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

    attributeChangedCallback(name, oldValue, newValue) {
      this.heading.innerText = newValue;
    }
  }

})();
