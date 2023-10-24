export class Ball{
  constructor(radius, speed, stageWidth, stageHeight){
    // constructor 메서드는 class로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드이다. python의 __init__생성자와 역할이 비슷한 초기함수이다.
    // this는 일반적으로 메소드를 호출한 객체가 저장되어있는 속성이다. 우리가 추가적으로 값을 수정하지 않는 이상 this.radius의 값과 Ball.radius의 값은 같을 것이다. python의 self와 비슷하다.
    this.radius = radius; //공의 반지름
    this.vx = speed; //x축 이동속도
    this.vy = speed; //y축 이동속도

    const diameter = this.radius *2; //공의 지름
    this.x = this.radius + (Math.random()*(stageWidth - diameter)); //x축 랜덤지정
    this.y = this.radius + (Math.random()*(stageHeight - diameter)); //y축 랜덤지정
  }
}

function bounceWindow(stageWidth, stageHeight){ 
  // 공이 화면 모서리에 닿으면 반대로 움직이게 하는 함수
  const minX = this.radius; 
  // x, y 좌표의 최소값 최대값은 반지름 길이를 고려해야 함
  const maxX = stageWidth - this.radius;
  const minY = this.radius;
  const maxY = stageHeight - this.radius;

  // 방향전환 조건문
  if (this.x <= minX || this.x >= maxX) { 
    // x 가 최소, 최대값 범위 밖이면 vx 에 -1 을 곱함 '||' 은 or 연산자
      this.vx *= -1;
      this.x += this.vx;
  } else if (this.y <=minY || this.y >= maxY) { 
    // y 가 최소, 최대값 범위 밖이면 vy에 -1을 곱함
      this.vy *= -1;
      this.y += this.vy;
  }
}