(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.Navigation = class Navigation extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
    }

    render() {
      this.root.innerHTML = '';

      this.aside = document.createElement('aside');

      this.data.forEach(({ navigationName, refinements }) => {
        const navElem = document.createElement('nav');
        const headerElem = document.createElement('my-navigation-header');
        headerElem.setAttribute('name', navigationName);
        const listElem = document.createElement('my-navigation-list');
        listElem.set('refinements', refinements);

        navElem.appendChild(headerElem);
        navElem.appendChild(listElem);
        this.aside.appendChild(navElem);
      });

      this.root.appendChild(this.aside);
    }
  }
})();
