(() => {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        display: block;
      }

      h1 {
        margin: 0;
        margin-bottom: 1.5rem;
      }
    </style>
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationHeader = class NavigationHeader extends window.__CORE__.MyEmitterComponent {
    static get observedAttributes() {
      return ['navigation-name'];
    }

    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.node = document.createElement('header');
      this.root.appendChild(template.content.cloneNode(true));
      this.root.appendChild(this.node);
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.set(this.attrToProp(name), newValue, false);
    }

    render() {
      this.node.innerHTML = '';

      this.heading = document.createElement('h1');
      this.heading.innerText = this.navigationName;
      this.node.appendChild(this.heading);
    }
  }
})();
