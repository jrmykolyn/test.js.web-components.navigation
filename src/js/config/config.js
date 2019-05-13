window.__STATE__ = {
  selectedRefinements: new Set(),
};

window. __EVENTS__ = {
  REFINEMENT_SELECTED: 'refinementSelected',
  REFINEMENT_DESELECTED: 'refinementDeselected',
};

window.__DATA__ = new Array(window.__UTILS__.getRandomNumber(2, 3))
  .fill(null)
  .map((_, i) => ({
    navigationName: `Navigation ${i}`,
    navigationSlug: `navigation-${i}`,
    refinements: window.__UTILS__.getRandomRefinements(),
  }));
