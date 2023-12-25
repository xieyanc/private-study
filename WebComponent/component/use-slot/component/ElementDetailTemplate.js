export default class ElementDetailTemplate extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById(
      "element-details-template",
    ).content;
    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.cloneNode(true),
    );
  }
}