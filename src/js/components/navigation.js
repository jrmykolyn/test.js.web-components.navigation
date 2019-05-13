(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.Navigation = class Navigation extends HTMLElement {
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
      this._data.forEach(({ navigationName, refinements }) => {
        const navElem = document.createElement('nav');
        const listElem = document.createElement('ul');

        const headerElem = document.createElement('my-navigation-header');
        headerElem.setAttribute('name', navigationName);

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

        navElem.appendChild(headerElem);
        navElem.appendChild(listElem);
        elem.appendChild(navElem);
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
})();
