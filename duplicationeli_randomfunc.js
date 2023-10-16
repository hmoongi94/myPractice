//중복을 제외하고 7회 돌면서 랜덤 숫자 뽑기
// let randomIndexArray = []
// for (i=0; i<7; i++) {
//   randomNum = Math.floor(Math.random() * 24)
//   if (randomIndexArray.indexOf(randomNum) === -1) {
//     randomIndexArray.push(randomNum)
//   }
// }
// console.log(randomIndexArray)
// [12, 2, 6, 23, 8, 15]

/////////////////////////////////////////////////////

// 그런데 여기서 문제가 또 생긴다. 이미 뽑은 숫자인지 확인했을 때 이미 들어있는 숫자와 겹치는 경우 그냥 숫자를 안 뽑고 그 턴을 지나가는 셈이기 때문에, 7개의 숫자를 뽑고 싶은데 5개, 6개만 출력되는 문제가 생겼다. 따라서 이미 뽑은 숫자일 경우, i를 1씩 감소시켜 다시 그 턴을 돌도록 코드를 추가했다.

//중복을 제외하고 7개의 랜덤 숫자 뽑기
// let randomIndexArray = []
// for (i=0; i<7; i++) {
//   randomNum = Math.floor(Math.random() * 24)
//   if (randomIndexArray.indexOf(randomNum) === -1) {
//     randomIndexArray.push(randomNum)
//   } else {
//     i--
//   }
// }
// console.log(randomIndexArray)
// [0, 15, 22, 13, 1,  2,  3]

///////////////////////////////////////////////////////

//selecting random index without same element
const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = []
  for (i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
    randomNum = Math.floor(Math.random() * totalIndex)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    } else { //if the randomNum is already in the array retry
      i--
    }
  }
  return randomIndexArray
}