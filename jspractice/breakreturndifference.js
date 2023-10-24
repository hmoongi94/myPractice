// return 문
const island=() =>{
  let count =1;

  while(true){
    let pass = parseInt(window.prompt("0~9한자리 번호를 입력하세요."))
    if(pass==3){
      console.log("탈출성공!");
      // return; 
      // break
    }
    console.log(`${count}회 탈출실패`);
    count++;
  }

  console.log(`총 ${count}번의 탈출시도를 했습니다.`)
}

island();

