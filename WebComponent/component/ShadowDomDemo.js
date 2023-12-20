export default class ShadowDomDemo extends HTMLDivElement {
  constructor() {
    self = super()

    // this.attachShadow({ mode: 'open' })设置影子DOM的宿主，此时是直接将这个组件当作影子DOM的宿主, this的位置就是影子宿主
    // 使用attachShadow打开影子DOM，此时对页面来说，这个DOM元素是隐藏的，我们是无法看到这个DOM元素的
    const shadow = this.attachShadow({ mode: 'open' })
    // this.setAttribute('id', 'host')
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