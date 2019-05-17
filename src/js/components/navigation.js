((window, CORE, COMPONENTS) => {
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
    <slot name="content">
      <nav>
        <slot name="header"></slot>
        <slot name="list"></slot>
      </nav>
    </slot>
  `;

  COMPONENTS.Navigation = class Navigation extends CORE.MyComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.slots = this.getSlots();
    }

    connectedCallback() {
      this.render();
    }

    render() {
      if (this.hasSlotContent('content')) return;
      this.renderHeader();
      this.renderList();
    }

    renderHeader() {
      if (this.hasSlotContent('header')) return;

      const { navigationName } = this.data;

      const headerElem = document.createElement('my-navigation-header');
      headerElem.setAttribute('navigation-name', navigationName);

      this.slots.header.appendChild(headerElem);
    }

    renderList() {
      if (this.hasSlotContent('list')) return;

      const { refinements } = this.data;

      const listElem = document.createElement('my-navigation-list');
      listElem.set('refinements', refinements);

      this.slots.list.appendChild(listElem);
    }
  }
})(window, window.__CORE__, (window.__COMPONENTS__ = window.__COMPONENTS__ || {}));
