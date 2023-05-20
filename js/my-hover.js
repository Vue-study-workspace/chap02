class MyHover extends HTMLElement {
  constructor() {
    super();
    // shadow DOMを準備
    const shadow = this.attachShadow({mode: 'open'});
    // <img>要素を作成
    const root = document.createElement('img');
    root.setAttribute('src', this.getAttribute('leave-src'));
    // イベントリスナーを準備
    root.addEventListener('mouseenter', e => {
      root.setAttribute('src', this.getAttribute('enter-src'));
    });
    root.addEventListener('mouseleave', e => {
      root.setAttribute('src', this.getAttribute('leave-src'));
    });
    // <img>要素をShadow DOMに追加
    shadow.appendChild(root);
  }
}

// <my-hover>要素を登録
customElements.define('my-hover', MyHover);
