((window, CORE) => {

  CORE.MyComponent = class MyComponent extends HTMLElement {
    emit(eventName, payload) {
      window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
    }

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

    hasSlotContent(name) {
      return this.children.length
        && [...this.children].some((n) => n.getAttribute('slot') === name);
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
})(window, (window.__CORE__ = window.__CORE__ || {}));
