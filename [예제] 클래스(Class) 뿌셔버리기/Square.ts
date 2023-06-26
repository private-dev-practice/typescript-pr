/*
- 사각형(`Square`) 클래스는 다음과 같은 정보를 갖는다.
    - 가로 길이
    - 세로 길이
- 사각형(`Square`) 클래스는 다음과 같은 기능을 할 수 있다.
    - 가로 길이 조회하기
    - 세로 길이 조회하기
    - 넓이 구하기
*/
class Square {
  a: number;
  b: number;

  constructor(a: number, b: number){
    this.a = a
    this.b = b
  }
  getWidth(): number{
    return this.a
  }
  getHeight(): number{
    return this.b
  }
  calculateArea(): number{
    return this.a * this.b
  }
}

const square = new Square(10, 15);
console.log(`가로 길이 : ${square.getWidth()}`); 
console.log(`세로 길이 : ${square.getHeight()}`); 
console.log(`넓이 : ${square.calculateArea()}`);