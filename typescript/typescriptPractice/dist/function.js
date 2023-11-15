"use strict";
//* 선택적 매개변수와 기본 매개변수
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');
//# sourceMappingURL=function.js.map