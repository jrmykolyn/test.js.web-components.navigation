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
    <slot name="content">
      <ul></ul>
    </slot>
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationList = class NavigationList extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.slots = this.getSlots();
    }

    render() {
      if (this.hasInnerHTML()) return;

      this.slots.content.innerHTML = '';

      const listElem = document.createElement('ul');

      this.refinements.forEach(({ name, value }) => {
        const listItemElem = document.createElement('my-navigation-list-item');
        listItemElem.setAttribute('refinement-name', name);
        listItemElem.setAttribute('refinement-value', value);

        listElem.appendChild(listItemElem);
      });

      this.slots.content.appendChild(listElem);
    }
  }
})();
