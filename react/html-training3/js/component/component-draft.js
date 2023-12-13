import { createElement } from "../util/createElement.js";
import { styleData } from "../data/styleData.js";
import { component1 } from "./rightComponent/component1.js";
import { component2 } from "./rightComponent/component2.js";
import { component3 } from "./rightComponent/component3.js";
import { data } from "../data/articleData.js";

export function component(){
  let Parent =  createElement('div', styleData.parentAttribute ,createElement('div',styleData.leftChildAttribute, data.article1),createElement('div',styleData.rightChildAttribute, component1(),component2(),component3()))
  
  return Parent
}

