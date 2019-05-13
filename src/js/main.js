const __EVENTS__ = {
  REFINEMENT_SELECTED: 'refinementSelected',
  REFINEMENT_DESELECTED: 'refinementDeselected',
};

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

      // Bind.
      this.handleRefinementClick = this.handleRefinementClick.bind(this);

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

          // Bind event handlers.
          checkBoxElem.addEventListener('click', this.handleRefinementClick);

          // Assemble document fragment.
          listItemElem.appendChild(checkBoxElem);
          listItemElem.appendChild(labelElem);
          listElem.appendChild(listItemElem);
        });

        elem.appendChild(listElem);
      });

      root.appendChild(elem);
    }

    handleRefinementClick(e) {
      e.target.checked
        ? this.emit(__EVENTS__.REFINEMENT_SELECTED)
        : this.emit(__EVENTS__.REFINEMENT_DESELECTED);
    }

    emit(eventName, payload) {
      window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
    }
  }

  window.customElements.define('my-navigation', Navigation);

  window.addEventListener(__EVENTS__.REFINEMENT_SELECTED, (e) => {
    console.log('__ RECEIVED `REFINEMENT_SELECTED` EVENT', e);
  });

  window.addEventListener(__EVENTS__.REFINEMENT_DESELECTED, (e) => {
    console.log('__ RECEIVED `REFINEMENT_DESELECTED` EVENT', e);
  });
});
