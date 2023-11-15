"use strict";
//* 선택적 매개변수와 기본 매개변수
//* 선택적 매개변수 ?사용 -> userId?
//   function log(message: string, userId?: string){
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId || 'not signed in')
// }
function log(message, context = {}) {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
}
log('dd', { appId: 'dd' });
//# sourceMappingURL=function.js.map