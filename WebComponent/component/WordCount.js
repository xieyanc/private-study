class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
  }

  /**
   * Web Component四个生命周期
   */
  connectedCallback() {
    console.log("WordCount自定义元素添加至页面。");
  }

  disconnectedCallback() {
    console.log("WordCount自定义元素从页面中移除。");
  }

  adoptedCallback() {
    // 移动页面的意思就是：从文档树中删除节点，但是不销毁，然后再插入到文档树中
    console.log("WordCount自定义元素移动至新页面。");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`WordCount属性 ${name} 已变更。`);
  }
}

export default WordCount