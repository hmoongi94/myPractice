import { render } from "./util/render.js";
import { component } from "./component/componentParent.js";

export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    const container = document.getElementById('root')
    // container.classList.add('root')
    console.dir(container)

    container.appendChild(render(component()))
    
  })
}