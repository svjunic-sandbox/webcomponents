# WebComponentsの遊び場
https://svjunic.github.io/sandbox_webcomponents

## なぜ今WebComponentsなのか
私の体感
- 2016年 ぐらいまでの流れはHTML5でセマンティックなマークアップ
- 2017年 webcomponentsの話がなんとなくで出す
- 2018年5 chromeでcustom elementsが使えるように

この時代の流れから、マークアップの基準がWebComponentsを見添えたほうが良いことがわかります。
他に、reactjsやvuejs、jsxも参考にされている点にも考慮して良いと思います。

## WebComponentsとは
https://www.webcomponents.org/
に大体書いてある、このページはpolymer使った重いサイトでどうもShadow DOM使ってないからよろしくない。
webサイトの設計方針に役に立ちます。

### Custom Elements
https://html.spec.whatwg.org/multipage/custom-elements.html
HTMLElementをextendして作る独自要素です。
ページを読み込んだ際に、JSを通じて実装されます。

### Shadow DOM
https://dom.spec.whatwg.org/#shadow-trees
Shadow DOMの仕様は、Web componentsにおけるカプセル化されたスタイルとマークアップの利用法を定義しています。

### HTML imports
link要素でrel="import"を使ってCustom Elementsを読み込む手法です。
こちらはもう廃案で、ブラウザから実装が削除されたりする流れになっています。

### ES MODULES
https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system
https://caniuse.com/#feat=es6-module
```
<script type="module">
```
ちなみに別にJSが動かせばwebcomponentは動くので、webpackとかに入れても結果は同じ。

### HTML Template
https://html.spec.whatwg.org/multipage/scripting.html#the-template-element
https://developer.mozilla.org/ja/docs/Web/HTML/Element/template
templete要素のこと。
HTML template elementの仕様は、マークアップのフラグメント(断片)を宣言する方法を定義しています。
このマークアップは、ページの読み込む際は使用されませんが、実行後にインスタンス化される可能性があります。

## 技術の選定
将来的にどういうふうに使われていくか
- 将来的なWebComponentsの使われ方を想像すること



# メモ
- mjsに書くときのhtmlやCSSはもしかするとwebpackベースのほうが都合が良いかも。1カスタムエレメント は 1webpack.configかな
- mjsはサーバからのレスポンスヘッダに適当なcontent-typeがついていない場合があるので、無難にJSでもいい
- type="module"で読み込む場合、deferと同じ扱いで動くっぽい
- type="module"で読み込んだ場合、変数はグローバルに出ない
- slot要素を動的に増やすようなことはできなさそう
