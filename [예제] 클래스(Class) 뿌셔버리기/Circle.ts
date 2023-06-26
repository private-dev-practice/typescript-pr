/*
**[요구사항]**

- 원(Circle) 클래스는 다음과 같은 정보를 갖는다.
    - 반지름
- 원(Circle) 클래스는 다음과 같은 기능을 할 수 있다.
    - 반지름 조회하기
    - 넓이 구하기 (원의 넓이 = `3.14` * `반지름²`)
- 아래의 코드를 실행시켰을 때 다음과 같이 출력되도록 원(`Circle`) 클래스를 만들어보자.
*/


class Circle {
  r: number;
  constructor(r: number){
    this.r = r
  }
  getRadius(): number{
    return this.r
  }
  calculateArea(): number{
    return this.r * this.r * 3.14
  }
}
const circle = new Circle(10);
console.log(`반지름 길이 : ${circle.getRadius()}`);
console.log(`넓이 : ${circle.calculateArea()}`);
