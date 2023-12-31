class UlList extends HTMLUListElement {
  constructor() {
    self = super();
    // super的返回值就是DOM元素本身
    console.log(self);
  }

  connectedCallback() {
    const uls = Array.from(self.querySelectorAll('ul'))
    const lis = Array.from(self.querySelectorAll('li'))

    // 隐藏所有的ul节点
    uls.forEach(ul => {
      // ul.style.display = 'none'
    })

    lis.forEach(li => {
      if (li.querySelectorAll('ul').length > 0) {
        li.setAttribute('class', 'closed')

        const childText = li.childNodes[0]
        const newSpan = document.createElement('span')

        newSpan.textContent = childText.textContent
        newSpan.style.cursor = 'pointer'

        newSpan.addEventListener('click', e => {
          const nextul = e.target.nextElementSibling

          if (nextul.style.display === 'block') {
            nextul.style.display = 'none'
            nextul.parentNode.setAttribute('class', 'closed')
          } else {
            nextul.style.display = 'block'
            nextul.parentNode.setAttribute('class', 'open')
          }
        })

        childText.parentNode.insertBefore(newSpan, childText)
        childText.parentNode.removeChild(childText)
      }
    })
  }

  disconnectedCallback() {
    console.log("UlList自定义元素从页面中移除。");
  }

  adoptedCallback() {
    console.log("UlList自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`UlList属性 ${name} 已变更。`);
  }
}

export default UlList