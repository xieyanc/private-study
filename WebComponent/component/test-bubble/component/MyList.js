let shadow = ''

export default class MyList extends HTMLElement {
  constructor() {
    super()

    shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const li1 = document.createElement('li')
    const li2 = document.createElement('li')

    li.innerText = '这个ul开启了shadow dom'
    li1.innerText = 'none function'
    li2.innerText = 'click function'

    // li2.onclick = (e) => {
    //   console.log('click li2');
    // }

    ul.onclick = () => {
      console.log('click ul');
    }

    ul.appendChild(li)
    ul.appendChild(li1)
    ul.appendChild(li2)
    shadow.appendChild(ul)
  }
}