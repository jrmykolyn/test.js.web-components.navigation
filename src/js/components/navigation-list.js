(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationList = class NavigationList extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
    }

    render() {
      this.root.innerHTML = '';

      this.list = document.createElement('ul');

      this.refinements.forEach(({ name, value }) => {
        const listItemElem = document.createElement('my-navigation-list-item');
        listItemElem.setAttribute('refinement-name', name);
        listItemElem.setAttribute('refinement-value', value);

        this.list.appendChild(listItemElem);
      });

      this.root.appendChild(this.list);
    }
  }
})();
