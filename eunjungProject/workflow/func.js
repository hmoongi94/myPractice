const root = document.getElementById("root");
console.dir(root);
const img = root.children[0].children;
console.dir(img);
const button = document.getElementById("button");


for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function clicks() {
    // let j = clientAnswer.length
    if(img[i].style.backgroundColor === ""){
      img[i].style.backgroundColor = "red";
    }
    else {
      img[i].style.backgroundColor = ""
    };
  })
}

// clientAnswer = clientAnswer.push(1,2,3)
// console.log(clientAnswer)
let clientAnswer = []
  equals=(arr1,arr2)=>{
  return(JSON.stringify(arr1)===JSON.stringify(arr2))
}

button.addEventListener("click", function(){
  let correctAnswer = [0,2,5]
  console.log(correctAnswer)
  let c= 0

  for(let j=0; j<img.length; j++){
    if(img[j].style.backgroundColor ==="red"){
      clientAnswer[c] = j
      c= c+1
    }
  }

  if(equals(clientAnswer,correctAnswer) === true){
    alert("맞습니다.")
    clientAnswer = []
  } else if(equals(clientAnswer,correctAnswer) === false){
    alert("틀렸습니다.")
    clientAnswer = []
  } else{
    console.log("에러입니다.")
  }
});

