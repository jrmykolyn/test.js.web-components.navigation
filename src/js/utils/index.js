(() => {
  const getRandomNumber = (min = 0, max = 1) => {
    const diff = max - min;
    return min + Math.round(Math.random() * diff);
  };

  const getRandomRefinement = (l = 2) => {
    // Yeah, these get redeclared every time the function is invoked... what of it?
    const vals = [
      'Bookmark',
      'Expense',
      'Grassland',
      'Homogenate',
      'Lox',
      'Nightlight',
      'Retrospective',
      'Slaw',
      'Stupidity',
      'Thanks',
    ];

    const selected = new Array(l).fill(null).map(() => vals[getRandomNumber(0, vals.length - 1)]);
    const name = selected.join(' ');
    const value = name.toLowerCase().replace(/ /g, '-');

    return {
      name,
      value,
    };
  };

  const getRandomRefinements = (count = 10, length = 2) => {
    return new Array(count).fill(null).map(() => getRandomRefinement(length));
  };

  window.__UTILS__ = window.__UTILS__ || {
    getRandomNumber,
    getRandomRefinement,
    getRandomRefinements,
  };
})();
