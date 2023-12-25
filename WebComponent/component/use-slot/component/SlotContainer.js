export default class SlotContainer extends HTMLElement {
  constructor() {
    super()

    let template = document.getElementById('slot-container')
    let templateContent = template.content

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(templateContent.cloneNode(true))
  }
}