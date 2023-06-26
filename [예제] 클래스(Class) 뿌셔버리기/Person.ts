/*
**[요구사항]**

아래와 같이 출력해라.

이름 : 아이유
나이 : 30
대학생인가요? : true
몸무게 : 40.5

*/

class Person {
  name: string;
  age : number;
  weight: number;

  constructor(name: string, age: number, weight: number){
    this.name = name
    this.age = age
    this.weight = weight
  }
  getName(): string{
    return this.name
  }
  getAge(): number{
    return this.age
  }
  IsStudent(): boolean{
    return (this.age > 20) && (this.age<28)
  }
  getWeight(): number{
    return this.weight
  }
}