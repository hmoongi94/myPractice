export class Ball{
  constructor(radius, speed){
    // constructor 메서드는 class로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드이다. python의 __init__생성자와 역할이 비슷한 초기함수이다.
    // this는 일반적으로 메소드를 호출한 객체가 저장되어있는 속성이다. 우리가 추가적으로 값을 수정하지 않는 이상 this.radius의 값과 Ball.radius의 값은 같을 것이다. python의 self와 비슷하다.
    this.radius = radius; //공의 반지름
    this.vx = speed; //x축 이동속도
    this.vy = speed; //y축 이동속도
  }
}