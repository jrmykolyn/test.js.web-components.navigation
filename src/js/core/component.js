(() => {
  window.__CORE__ = window.__CORE__ || {};

  window.__CORE__.MyComponent = class MyComponent extends HTMLElement {
    getSlots() {
      const slots = this.root.querySelectorAll('slot') || [];
      return [...slots].reduce((acc, node) => {
        const key = node.getAttribute('name');
        return {
          ...acc,
          [key]: node,
        };
      }, {});
    }

    hasInnerHTML() {
      return !!this.innerHTML;
    }

    set(property, value, shouldRender = true) {
      this[property] = value;
      if (shouldRender) this.render();
    }

    attrToProp(str) {
      return str.split('-')
        .map((s, i) => i === 0 ? s : s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase())
        .join('');
    }
  }
})();
