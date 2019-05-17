((window, CORE, COMPONENTS) => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style></style>
    <slot name="content">
      <section></section>
    </slot>
  `;

  COMPONENTS.Navigations = class Navigations extends CORE.MyComponent {
    constructor() {
      super();

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));
      this.slots = this.getSlots();
    }

    render() {
      if (this.hasSlotContent('content')) return;

      this.slots.content.innerHTML = '';

      const sectionElem = document.createElement('section');

      this.data.forEach((datum) => {
        const navigationElem = document.createElement('my-navigation');
        navigationElem.set('data', datum, false);
        sectionElem.appendChild(navigationElem);
      });

      this.slots.content.appendChild(sectionElem);
    }
  }
})(window, window.__CORE__, (window.__COMPONENTS__ = window.__COMPONENTS__ || {}));
