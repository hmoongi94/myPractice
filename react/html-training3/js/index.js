import { createElement } from "./util/createElement.js";
import { render } from "./util/render.js";
import { componentParent } from "./component/componentParent.js";
import { componentLeftSide } from "./component/componentLeftSide.js";

import { data } from "./data/data.js";

export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    const container = document.getElementById('root')
    // container.classList.add('root')
    console.dir(container)

    container.appendChild(render(componentParent(data.article1)))
    
  })
}