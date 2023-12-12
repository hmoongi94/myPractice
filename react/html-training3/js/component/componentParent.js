import { createElement } from "../util/createElement.js";

export function componentParent(){
  let Parent =  createElement('div',{style:'display:flex; background-color:grey'},createElement('div',{style:'background-color:white; width:434px; height:348px; top:162px; left:113px; font-weight:400; font-size: 16px; line-height:19.36px; font: color #000; margin: 30px'},'자식'),createElement('div',{style:'width: 1200px; height:348px; margin:30px'},'자식2'))
  
  return Parent
}