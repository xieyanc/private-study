/**
 * 这四个是认识WebComponent的示例
 */
// import WordCount from "./component/WordCount.js"
// import PopupInfo from './component/PopupInfo.js'
// import UlList from './component/UlList.js'
// import Square from "./component/Square.js"

/**
 * 这是认识ShadowDom的示例
 */
import ShadowDomDemo from "./component/ShadowDomDemo.js"

/**
 * 来自mdn文档的demo
 */
// customElements.define('word-count', WordCount, { extends: 'p' })
// customElements.define('popup-info', PopupInfo)
// customElements.define('custom-square', Square)
// customElements.define('ul-list', UlList, { extends: 'ul' })
customElements.define('shadow-dom-demo', ShadowDomDemo, { extends: 'div' })