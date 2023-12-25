export default class Square extends HTMLElement {
  static get observedAttributes() {
    return ["color", "size"];
  }

  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    const div = document.createElement('div')
    const style = document.createElement('style')
    shadow.appendChild(style)
    shadow.appendChild(div)
  }

  connectedCallback() {
    console.log('Square connectedCallback');
    updateStyle(this)
  }

  disconnectedCallback() {
    console.log('Square disconnectedCallback');
  }

  adoptedCallback() {
    console.log('Square adoptedCallback');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Square attributeChangedCallback');
    updateStyle(this);
  }
}

function updateStyle(ele) {
  const shadow = ele.shadowRoot
  shadow.querySelector('style').textContent = `
    div {
      width: ${ele.getAttribute('size')}px;
      height: ${ele.getAttribute("size")}px;
      background-color: ${ele.getAttribute("color")};
    }
  `
}

const add = document.querySelector('.add')
const update = document.querySelector('.update')
const remove = document.querySelector('.remove')
let square = ''

if (update !== null) {
  update.disabled = true;
}

if (remove !== null) {
  remove.disabled = true;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function () {
  square = document.createElement("custom-square");
  square.setAttribute("size", "100");
  square.setAttribute("color", "red");
  document.body.appendChild(square);

  update.disabled = false;
  remove.disabled = false;
  add.disabled = true;
};

update.onclick = function () {
  square.setAttribute("size", random(50, 200));
  square.setAttribute(
    "color",
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  );
};

remove.onclick = function () {
  // Remove the square
  document.body.removeChild(square);

  update.disabled = true;
  remove.disabled = true;
  add.disabled = false;
};