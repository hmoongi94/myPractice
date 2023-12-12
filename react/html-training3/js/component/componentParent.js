import { createElement } from "../util/createElement.js";
import { styleData } from "../data/styleData.js";

export function componentParent(data){
  let Parent =  createElement('div', styleData.parentAttribute ,createElement('div',styleData.leftChildAttribute, data),createElement('div',styleData.rightChildAttribute,'자식2'))
  
  return Parent
}