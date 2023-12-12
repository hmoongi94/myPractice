import { createElement } from "./util/createElement.js";
import { render } from "./util/render.js";

export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    function component(stateData) {
      const menuItems = [];
      for (let i = 0; i < stateData.length; i++) {
        const item = stateData[i]
        const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.text))
        menuItems.push(menuItem)
      }

      const menu = createElement('ul', {}, ...menuItems)
      const content = createElement('div', {}, 'Hello React')

      return createElement('div', {}, menu, content)
    }

    const stateData = [
      { hash: '#home', text: 'Home' },
      { hash: '#about', text: 'About' },
      { hash: '#services', text: 'Services' },
      { hash: '#portfolio', text: 'portfolio' },
      { hash: '#contact', text: 'Contact' }
    ]

    const virtualDom = component(stateData)
    const container = document.getElementById('root')
    container.appendChild(render(virtualDom))
  })
}