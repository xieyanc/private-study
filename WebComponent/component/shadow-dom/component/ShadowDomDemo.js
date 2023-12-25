/**
 * 注意了，现在自己定义的这种web component的写法有点不规范，不应该在构造器中定义shadowDOM和进行DOM操作
 * 应该在connectedCallback这个周期中执行这些操作较为合理。
 */

export default class ShadowDomDemo extends HTMLDivElement {
  constructor() {
    self = super()

    // 在 CSSStyleSheet 中定义的规则将局限在影子 DOM 树的内部，以及我们将其分配到的任何其它 DOM 树。
    const styleSheet = new CSSStyleSheet()
    styleSheet.replaceSync(
      `
        span {
          color: skyblue;
        }
      `
    )

    // this.attachShadow({ mode: 'open' })设置影子DOM的宿主，此时是直接将这个组件当作影子DOM的宿主, this的位置就是影子宿主
    // 使用attachShadow打开影子DOM，此时对页面来说，这个DOM元素是隐藏的，我们是无法看到这个DOM元素的
    const shadow = this.attachShadow({ mode: 'open' })
    // 使用CSS StyleSheet将样式作用到影子DOM上
    shadow.adoptedStyleSheets = [styleSheet];
    const span = document.createElement('span')
    span.textContent = 'I`m in the shadow DOM'
    shadow.appendChild(span)
  }

  connectedCallback() {
    console.log("WordCount自定义元素添加至页面。");
  }

  disconnectedCallback() {
    console.log("WordCount自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("WordCount自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`WordCount属性 ${name} 已变更。`);
  }
}

const upper = document.querySelector('#upper')
const upperAll = document.querySelector('#upperAll')
const host = document.querySelector('.host')
console.log(host);

upper.onclick = function () {
  // 使用shadowRoot获取影子DOM中的元素
  const spans = Array.from(host.shadowRoot.querySelectorAll('span'))
  for (const item of spans) {
    item.textContent = item.textContent.toUpperCase()
  }
}

upperAll.onclick = function () {
  const spans = [...Array.from(host.shadowRoot.querySelectorAll('span')), ...Array.from(document.querySelectorAll('span'))]
  for (const item of spans) {
    item.textContent = item.textContent.toUpperCase()
  }
}