import { render } from "./util/render.js";
import { data } from "./data/articleData.js";

import { component } from "./component/component-draft.js";
import { parentComponent } from "./component/parentComponent.js";
import { component4 } from "./component/rightComponent/component4.js";
import { component5 } from "./component/rightComponent/component5.js";
import { component6 } from "./component/rightComponent/component6.js";



export function load() {
  document.addEventListener('DOMContentLoaded', function () {

    const container = document.getElementById('root')
    // container.classList.add('root')
    console.dir(container)

    container.appendChild(render(component()))
    container.appendChild(render(parentComponent(data.article5,component4(),component5(),component6())))
  })
}