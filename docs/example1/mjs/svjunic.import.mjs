export default function() {
  console.log('type module sv-junic(export default)');

  const css = `
<style>
:host {
  background: #f00;
  display: block;
  margin-top: 10px;
}
p {
  color: #000;
  padding: 1rem;
  background:#f90;
  border: 1px solid #ccc;
  border-radius: 10px;
}
div {
  color: #00f;
  margin: 10px;
  padding: 1rem;
  background:#fff;
  border: 1px solid #ccc;
  border-radius: 10px;
}

::slotted(div) {
  outline: 1px solid #000;
  width: 150px;
}
[aria-selected="true"]{
  border: 3px solid #f00;
}
[role="tabpanel"]{
  display: none;
}
[role="tabpanel"][aria-hidden="false"]{
  display: block;
}
</style>
`;

  const html = `
<div role="application">
  <ul role="tablist">
    <li><button type="button" id="tab1" role="tab" aria-controls="panel1" aria-selected="true">tab1</button></li>
    <li><button type="button" id="tab2" role="tab" aria-controls="panel2" aria-selected="false">tab2</button></li>
    <li><button type="button" id="tab3" role="tab" aria-controls="panel3" aria-selected="false">tab3</button></li>
  </ul>
  <div id="panel1" aria-labeledby="tab1" role="tabpanel" aria-hidden="false"><slot name="tab1">もげた1</slot></div>
  <div id="panel2" aria-labeledby="tab2" role="tabpanel" aria-hidden="true"><slot name="tab2">もげた2</slot></div>
  <div id="panel3" aria-labeledby="tab3" role="tabpanel" aria-hidden="true"><slot name="tab3">もげた3</slot></div>
</div>
`;

  customElements.define(
    'sv-junic',
    class extends HTMLElement {
      constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = css + html;

        this.tabs = [].map.call(this.shadowRoot.querySelectorAll('[role="tab"]'), element => {
          return element;
        });

        this.tabpanels = [].map.call(this.shadowRoot.querySelectorAll('[role="tabpanel"]'), element => {
          return element;
        });

        this.handleClickBind = this.handleClick.bind(this);
        this.shadowRoot.addEventListener('click', this.handleClickBind);
      }

      /**
       * タブの切替ボタンをクリックした際のイベントハンドラ
       */
      handleClick(e) {
        if (e.target.getAttribute('role') === 'tab') {
          this.change(e.target.getAttribute('aria-controls'));
        }
      }

      change(id) {
        this.tabReset();

        this.tabs.filter(function(el) {
          if (el.getAttribute('aria-controls') === id) el.setAttribute('aria-selected', 'true');
        });
        this.tabpanels.filter(function(el) {
          if (el.id === id) el.setAttribute('aria-hidden', 'false');
        });
      }

      tabReset() {
        this.tabs.forEach(function(el) {
          el.setAttribute('aria-selected', 'false');
        });
        this.tabpanels.forEach(function(el) {
          el.setAttribute('aria-hidden', 'true');
        });
      }
    }
  );
}
