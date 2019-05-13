const __DATA__ = [
  {
    refinements: [
      { name: 'Foo', value: 'foo' },
      { name: 'Bar', value: 'bar' },
      { name: 'Baz', value: 'baz' },
      { name: 'Quux', value: 'quux' },
    ],
  },
];

window.addEventListener('DOMContentLoaded', () => {
  class Navigation extends HTMLElement {
    constructor() {
      super();

      this.data = __DATA__;
      const root = this.attachShadow({ mode: 'open' });

      const elem = document.createElement('aside');
      this.data.forEach(({ refinements }) => {
        const listElem = document.createElement('ul');

        refinements.forEach(({ name, value }) => {
          // Create elements.
          const id = Math.random().toString().substring(3);
          const listItemElem = document.createElement('ul');
          const labelElem = document.createElement('label');
          const checkBoxElem = document.createElement('input');

          // Update elements.
          labelElem.innerText = name;
          labelElem.setAttribute('for', id);
          checkBoxElem.setAttribute('type', 'checkbox');
          checkBoxElem.id = id;

          // Assemble document fragment.
          listItemElem.appendChild(checkBoxElem);
          listItemElem.appendChild(labelElem);
          listElem.appendChild(listItemElem);
        });

        elem.appendChild(listElem);
      });

      root.appendChild(elem);
    }
  }

  window.customElements.define('my-navigation', Navigation);
});
