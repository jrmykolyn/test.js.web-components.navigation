(() => {
  window.__CORE__ = window.__CORE__ || {};

  window.__CORE__.MyComponent = class MyComponent extends HTMLElement {
    set(property, value) {
      this[property] = value;
      this.render();
    }

    attrToProp(str) {
      return str.split('-')
        .map((s, i) => i === 0 ? s : s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase())
        .join('');
    }
  }
})();
