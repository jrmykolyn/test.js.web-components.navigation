(() => {
  window.__CORE__ = window.__CORE__ || {};

  window.__CORE__.MyComponent = class MyComponent extends HTMLElement {
    set(property, value) {
      this[property] = value;
      this.render();
    }
  }
})();
