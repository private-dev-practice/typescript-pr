/* 
```
이름 : 제이슨
국어 : 87
영어 : 92

이름 : 레이첼
국어 : 82
영어 : 92

이름 : 리사
국어 : 92
영어 : 88
``` */

class Student {
  name: string;
  motherTongue: number;
  eng: number;
  
  constructor(name: string, motherTongue: number, eng: number){
    this.name = name
    this.motherTongue = motherTongue
    this.eng = eng
  }
}

const student1 = new Student('제이슨', 87, 92)
const student2 = new Student('레이첼', 82, 92)
const student3 = new Student('리사', 92, 88)

const arr :Student[] =[student1,student2,student3]

function printArr(): void{
  arr.map((e) => {
    console.log('이름 : ', e.name)
    console.log('국어 : ', e.motherTongue)
    console.log('영어 : ', e.eng)
    console.log('')
  })
}
printArr()