console.log('type module sv-junic');

const css = `
<style>
:host {
  background: #f00;
  display: block;
  margin-top: 10px;
}
div {
  padding: 20px;
  background: #0099ff;
}
</style>
`;

const html = `
<div role="application">
<div class="stage">
<sv-junic2></sv-junic2>
</div>
</div>
`;

customElements.define(
  'sv-junic',
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = css + html;
    }
    // https://developer.mozilla.org/ja/docs/Web/Web_Components/Custom_Elements
    // 要素がドキュメントに挿入されたときに呼び出される、シャドウツリーへの呼び出し
    connectedCallback() {
      console.log('呼び出されちゃった・・・///');
    }
    // 要素がドキュメントから削除されたときに呼び出されます
    disconnectedCallback() {
      console.log('やめて、消さないで！！！');
    }
    // 要素の属性が変更、追加、削除、または置換されたときに呼び出されます。 監視対象の属性に対してのみ呼び出されます。
    attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      console.log('次の元号は令和です', arguments);
    }
    // 要素が新しい文書に採用されたときに呼び出されます
    adoptedCallback(oldDocument, newDocument) {
      console.log('これなんや・・・', arguments);
    }
  }
);
