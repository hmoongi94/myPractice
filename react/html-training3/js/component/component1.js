import { createElement } from "../util/createElement.js";
import { styleData } from "../data/styleData.js";
import { data } from "../data/data.js";

export function component1(){
  return createElement('div', styleData.component1, data.article2)
}