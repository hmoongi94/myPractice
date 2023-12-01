import { renderElement, render } from "./utils/render.js";
import { createElement } from "./utils/createElement.js"

import { parentBox } from "./components/parentBox.js";

export function load(){
  document.addEventListener('DOMContentLoaded',function(){
    renderElement(parentBox())

  })
}