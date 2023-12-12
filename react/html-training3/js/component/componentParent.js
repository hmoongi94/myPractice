import { createElement } from "../util/createElement.js";
import { styleData } from "../data/styleData.js";
import { component1 } from "./component1.js";
import { component2 } from "./component2.js";
import { component3 } from "./component3.js";

export function componentParent(data){
  let Parent =  createElement('div', styleData.parentAttribute ,createElement('div',styleData.leftChildAttribute, data),createElement('div',styleData.rightChildAttribute, component1(),component2(),component3()))
  
  return Parent
}

