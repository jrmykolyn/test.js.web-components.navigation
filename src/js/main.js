window.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('my-navigation', window.__COMPONENTS__.Navigation);

  const targetElem = document.getElementById('target');
  const navigationElem = document.querySelector('my-navigation');
  navigationElem.data = window.__DATA__;

  const handleEvent = (eventType) => {
    return ({ detail: { refinementValue: value }}) => {
      const method = eventType === 'deselected'
        ? 'delete'
        : 'add';

      window.__STATE__.selectedRefinements[method](value);

      targetElem.innerHTML = [...window.__STATE__.selectedRefinements.values()].join(', ');
    };
  };

  // Register global event listeners.
  window.addEventListener(window.__EVENTS__.REFINEMENT_SELECTED, handleEvent('selected'));
  window.addEventListener(window.__EVENTS__.REFINEMENT_DESELECTED, handleEvent('deselected'));
});
