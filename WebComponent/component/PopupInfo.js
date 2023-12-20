class Popupinfo extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Popupinfo自定义元素添加至页面。");
    // 开启shadowDom
    const shadow = this.attachShadow({ mode: 'open' })

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    const text = this.getAttribute('data-text')
    container.textContent = text

    const style = document.createElement('style')
    style.textContent = `
          .container {
              width: 200px;
              height: 200px;
              background-color: pink;
          }
      `

    shadow.appendChild(style)
    shadow.appendChild(container)
  }

  disconnectedCallback() {
    console.log("Popupinfo自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("Popupinfo自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Popupinfo属性 ${name} 已变更。`);
  }
}

export default Popupinfo