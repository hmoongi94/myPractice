import { render } from "./util/render.js";
import { data } from "./data/articleData.js";

import { component } from "./component/component.js";
import { parentComponent } from "./component/parentComponent.js";



export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    const container = document.getElementById('root')
    // container.classList.add('root')
    console.dir(container)

    container.appendChild(render(component()))
    container.appendChild(render(parentComponent(data.article5,)))
  })
}