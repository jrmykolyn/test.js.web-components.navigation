(() => {
  window.__CORE__ = window.__CORE__ || {};

  window.__CORE__.MyEmitterComponent = class MyEmitterComponent extends window.__CORE__.MyComponent {
    emit(eventName, payload) {
      window.dispatchEvent(new CustomEvent(eventName, { detail: payload }));
    }
  }
})();
