(() => {
  const template = document.createElement('template');

  template.innerHTML = `
    <style>
      :host {
        display: block;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    </style>
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationList = class NavigationList extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.node = document.createElement('ul');
      this.root.appendChild(template.content.cloneNode(true));
      this.root.appendChild(this.node);
    }

    render() {
      this.node.innerHTML = '';

      this.refinements.forEach(({ name, value }) => {
        const listItemElem = document.createElement('my-navigation-list-item');
        listItemElem.setAttribute('refinement-name', name);
        listItemElem.setAttribute('refinement-value', value);

        this.node.appendChild(listItemElem);
      });
    }
  }
})();
