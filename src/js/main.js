window.addEventListener('DOMContentLoaded', () => {
  // Register custom elements.
  window.customElements.define('my-navigation', window.__COMPONENTS__.Navigation);
  window.customElements.define('my-navigation-header', window.__COMPONENTS__.NavigationHeader);
  window.customElements.define('my-navigation-list', window.__COMPONENTS__.NavigationList);
  window.customElements.define('my-navigation-list-item', window.__COMPONENTS__.NavigationListItem);

  const targetElem = document.getElementById('target');
  const navigationElem = document.querySelector('my-navigation');
  navigationElem.set('data', window.__DATA__);

  const refinements = window.__DATA__
    .map(({ refinements }) => refinements)
    .reduce((acc, arr) => [...acc, ...arr], [])
    .map(({ value }) => value);

  const products = window.__UTILS__.getRandomProducts(refinements, 20);

  const renderProducts = (products, target) => {
    products.forEach(({ name, refinements }) => {
      const elem = document.createElement('div');
      elem.refinements = refinements;
      const titleElem = document.createElement('p');
      titleElem.innerText = name;

      elem.appendChild(titleElem);
      target.appendChild(elem);
    });
  };

  const handleEvent = (eventType) => {
    return ({ detail: { refinementValue: value }}) => {
      const method = eventType === 'deselected'
        ? 'delete'
        : 'add';

      window.__STATE__.selectedRefinements[method](value);

      // Handle products.
      const selectedRefinements = [...window.__STATE__.selectedRefinements.values()];
      const filteredProducts = products.filter(({ refinements }) => refinements.some((r) => selectedRefinements.includes(r)))
      targetElem.innerHTML = '';
      renderProducts(filteredProducts, targetElem);
    };
  };

  renderProducts(products, targetElem);

  // Register global event listeners.
  window.addEventListener(window.__EVENTS__.REFINEMENT_SELECTED, handleEvent('selected'));
  window.addEventListener(window.__EVENTS__.REFINEMENT_DESELECTED, handleEvent('deselected'));
});
