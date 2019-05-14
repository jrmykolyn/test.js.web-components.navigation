(() => {
  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.NavigationListItem = class NavigationListItem extends window.__CORE__.MyEmitterComponent {
    static get observedAttributes() {
      return ['refinement-name', 'refinement-value'];
    }

    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });

      // Bind.
      this.handleRefinementClick = this.handleRefinementClick.bind(this);
    }

    connectedCallback() {
      this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.set(this.attrToProp(name), newValue, false);
    }

    render() {
      this.root.innerHTML = '';

      this.listItem = document.createElement('li');

      const id = Math.random().toString().substring(3);
      const labelElem = document.createElement('label');
      const checkBoxElem = document.createElement('input');

      labelElem.innerText = this.refinementName;
      labelElem.setAttribute('for', id);
      checkBoxElem.setAttribute('type', 'checkbox');
      checkBoxElem.id = id;

      // Bind event handlers.
      checkBoxElem.addEventListener('click', this.handleRefinementClick);

      this.listItem.appendChild(checkBoxElem);
      this.listItem.appendChild(labelElem);
      this.root.appendChild(this.listItem);
    }

    handleRefinementClick(e) {
      const { refinementName, refinementValue } = this;
      const data = { refinementName, refinementValue };

      e.target.checked
        ? this.emit(__EVENTS__.REFINEMENT_SELECTED, data)
        : this.emit(__EVENTS__.REFINEMENT_DESELECTED, data);
    }
  }
})();
