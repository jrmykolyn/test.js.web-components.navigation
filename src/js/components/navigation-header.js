((window, CORE, COMPONENTS) => {
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
    <slot name="content">
      <header></header>
    </slot>
  `;

  COMPONENTS.NavigationHeader = class NavigationHeader extends CORE.MyComponent {
    static get observedAttributes() {
      return ['navigation-name'];
    }

    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.slots = this.getSlots();
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.set(this.attrToProp(name), newValue, false);
    }

    render() {
      if (this.hasInnerHTML()) return;

      this.slots.content.innerHTML = '';

      const headerElem = document.createElement('header');
      const headingElem = document.createElement('h1');
      headingElem.innerText = this.navigationName;

      headerElem.appendChild(headingElem);
      this.slots.content.appendChild(headerElem);
    }
  }
})(window, window.__CORE__, (window.__COMPONENTS__ = window.__COMPONENTS__ || {}));
