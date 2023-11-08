// function throwFunction(){
//   console.log("throw로 인해 예외처리 된 경우입니다.")
// }


// function divide(a, b) {
//   if (b === 0) {
//     throw throwFunction()
//   }
//   return a / b;
// }

// try {
//   const result = divide(10, 0);
//   console.log('나눈 결과:', result);
// } catch (throwFunction) {
//   throwFunction();
// }

// console.log(10/0)

function throwFunction(){
  console.log("throw로 인해 예외처리 된 경우입니다.")
}

function divide(a, b) {
  if (b === 0) {
    throw throwFunction
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log('나눈 결과:', result);
} catch(execption) {
  throwFunction(); // 예외 처리 후 함수 호출
}