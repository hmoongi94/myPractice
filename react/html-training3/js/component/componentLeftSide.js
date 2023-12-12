import { createElement } from "../util/createElement.js";

export function componentLeftSide(stateData) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i]
    const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.text))
    menuItems.push(menuItem)
  }

  const menu = createElement('ul', {}, ...menuItems)

  return createElement('div', {}, menu)
}