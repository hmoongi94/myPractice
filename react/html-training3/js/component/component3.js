import { createElement } from "../util/createElement.js";
import { styleData } from "../data/styleData.js";
import { data } from "../data/data.js";

export function component3(){
  return createElement('div', styleData.component3, data.article4)
}