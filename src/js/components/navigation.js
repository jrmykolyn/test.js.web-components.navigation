(() => {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        display: block;
      }

      nav {
        margin-bottom: 2rem;
        padding: 0 2rem;
      }
    </style>
    <slot name="content"></slot>
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.Navigation = class Navigation extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.slots = this.getSlots();
      this.node = document.createElement('aside');
      this.slots.content.appendChild(this.node);
    }

    render() {
      this.slots.content.innerHTML = '';

      this.data.forEach(({ navigationName, refinements }) => {
        const navElem = document.createElement('nav');
        const headerElem = document.createElement('my-navigation-header');
        headerElem.setAttribute('navigation-name', navigationName);
        const listElem = document.createElement('my-navigation-list');
        listElem.set('refinements', refinements);

        navElem.appendChild(headerElem);
        navElem.appendChild(listElem);

        this.slots.content.appendChild(navElem);
      });
    }
  }
})();
