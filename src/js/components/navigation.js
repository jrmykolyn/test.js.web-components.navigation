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
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.Navigation = class Navigation extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.node = document.createElement('aside');
      this.root.appendChild(template.content.cloneNode(true));
      this.root.appendChild(this.node);
    }

    render() {
      this.node.innerHTML = '';

      this.data.forEach(({ navigationName, refinements }) => {
        const navElem = document.createElement('nav');
        const headerElem = document.createElement('my-navigation-header');
        headerElem.setAttribute('navigation-name', navigationName);
        const listElem = document.createElement('my-navigation-list');
        listElem.set('refinements', refinements);

        navElem.appendChild(headerElem);
        navElem.appendChild(listElem);

        this.node.appendChild(navElem);
      });
    }
  }
})();
