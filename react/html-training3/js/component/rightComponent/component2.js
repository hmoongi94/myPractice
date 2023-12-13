import { createElement } from "../../util/createElement.js";
import { styleData } from "../../data/styleData.js";
import { data } from "../../data/articleData.js";

export function component2(){
  return createElement('div', styleData.component2, data.article3)
}