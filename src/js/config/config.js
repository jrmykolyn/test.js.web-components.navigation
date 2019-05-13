window.__STATE__ = {
  selectedRefinements: new Set(),
};

window. __EVENTS__ = {
  REFINEMENT_SELECTED: 'refinementSelected',
  REFINEMENT_DESELECTED: 'refinementDeselected',
};

window.__DATA__ = [
  {
    navigationName: 'Navigation A',
    navigationSlug: 'navigation-a',
    refinements: [
      { name: 'Foo', value: 'foo' },
      { name: 'Bar', value: 'bar' },
    ],
  },
  {
    navigationName: 'Navigation B',
    navigationSlug: 'navigation-b',
    refinements: [
      { name: 'Baz', value: 'baz' },
      { name: 'Quux', value: 'quux' },
    ],
  },
];
