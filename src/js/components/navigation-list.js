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
    <slot name="content"></slot>
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationList = class NavigationList extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.slots = this.getSlots();
      this.node = document.createElement('ul');
      this.slots.content.appendChild(this.node);
    }

    render() {
      this.slots.content.innerHTML = '';

      this.refinements.forEach(({ name, value }) => {
        const listItemElem = document.createElement('my-navigation-list-item');
        listItemElem.setAttribute('refinement-name', name);
        listItemElem.setAttribute('refinement-value', value);

        this.slots.content.appendChild(listItemElem);
      });
    }
  }
})();
