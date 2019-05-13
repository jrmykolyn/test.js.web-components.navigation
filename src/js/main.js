window.__STATE__ = {
  selectedRefinements: new Set(),
};

window. __EVENTS__ = {
  REFINEMENT_SELECTED: 'refinementSelected',
  REFINEMENT_DESELECTED: 'refinementDeselected',
};

window.__DATA__ = [
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
