(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style></style>
    <slot name="content">
      <section></section>
    </slot>
  `;

  window.__COMPONENTS__ = window.__COMPONENTS__ || {};

  window.__COMPONENTS__.Navigations = class Navigations extends window.__CORE__.MyComponent {
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
})();
