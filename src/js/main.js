const __STATE__ = {
  selectedRefinements: new Set(),
};

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
  const targetElem = document.getElementById('target');

  class Navigation extends HTMLElement {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });

      // Bind.
      this.handleRefinementClick = this.handleRefinementClick.bind(this);
    }

    set data(val) {
      this._data = val;
      this.render();
    }

    render() {
      // Clear current DOM.
      this.root.innerHTML = '';

      // Build and inject new DOM elems.
      const elem = document.createElement('aside');
      this._data.forEach(({ refinements }) => {
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
          checkBoxElem.dataset.refinementName = name;
          checkBoxElem.dataset.refinementValue = value;
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

      this.root.appendChild(elem);
    }

    handleRefinementClick(e) {
      const data = e.target.dataset;
      e.target.checked
        ? this.emit(__EVENTS__.REFINEMENT_SELECTED, data)
        : this.emit(__EVENTS__.REFINEMENT_DESELECTED, data);
    }

    emit(eventName, payload) {
      window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
    }
  }

  window.customElements.define('my-navigation', Navigation);
  const navigationElem = document.querySelector('my-navigation');
  navigationElem.data = __DATA__;

  // Register global event listeners.
  window.addEventListener(__EVENTS__.REFINEMENT_SELECTED, ({ detail: { refinementValue: value } }) => {
    __STATE__.selectedRefinements.add(value);
    target.innerHTML = [...__STATE__.selectedRefinements.values()].join(', ');
  });

  window.addEventListener(__EVENTS__.REFINEMENT_DESELECTED, ({ detail: { refinementValue: value } }) => {
    __STATE__.selectedRefinements.delete(value);
    target.innerHTML = [...__STATE__.selectedRefinements.values()].join(', ');
  });
});
