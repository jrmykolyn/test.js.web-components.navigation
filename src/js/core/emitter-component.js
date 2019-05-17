((window, CORE) => {
  CORE.MyEmitterComponent = class MyEmitterComponent extends CORE.MyComponent {
    emit(eventName, payload) {
      window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
    }
  }
})(window, (window.__CORE__ = window.__CORE__ || {}));
