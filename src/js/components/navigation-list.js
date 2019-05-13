(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationList = class NavigationList extends window.__CORE__.MyEmitterComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });

      // Bind.
      this.handleRefinementClick = this.handleRefinementClick.bind(this);
    }

    render() {
      this.root.innerHTML = '';

      this.list = document.createElement('ul');

      this.refinements.forEach(({ name, value }) => {
        // Create elements.
        const id = Math.random().toString().substring(3);
        const listItemElem = document.createElement('li');
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
        this.list.appendChild(listItemElem);
      });

      this.root.appendChild(this.list);
    }

    handleRefinementClick(e) {
      const data = e.target.dataset;
      e.target.checked
        ? this.emit(__EVENTS__.REFINEMENT_SELECTED, data)
        : this.emit(__EVENTS__.REFINEMENT_DESELECTED, data);
    }
  }
})();
