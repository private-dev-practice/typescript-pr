/*
‘신입사원 토끼’는 개발을 배우고 첫 회사에 취직을 했다. 처음으로 코드를 짜서 ‘호랑이 팀장님’한테 검사를 맡았다. ‘호랑이 팀장님’이 다른 사람이 알아보기 힘들게 코드를 짜면 어떡하냐고 혼났다. 

‘신입사원 토끼’가 짠 코드를 ‘호랑이 팀장님’한테 더 이상 혼나지 않게 코드를 수정해보자. 

**[요구 사항]**

아래 코드는 모든 숫자의 합, 곱, 평균을 구해주는 프로그램이다. 아래 코드를 수정해보자.

- 배열에 있는 모든 숫자의 합을 구해주는 함수를 만들어라.
- 배열에 있는 모든 숫자의 곱을 구해주는 함수를 만들어라.
- 배열에 있는 모든 숫자의 평균을 구해주는 함수를 만들어라.
- `+=`, `*=`을 사용해서 코드를 간단하게 만들어라.
*/

const numbers = [90, 50, 80, 92, 82];
//- 배열에 있는 모든 숫자의 합을 구해주는 함수를 만들어라.
const sumFunction = () => {
  let sum2 = 0;  
  for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
  }
  return sum2
}
//- 배열에 있는 모든 숫자의 곱을 구해주는 함수를 만들어라.
function multiplyAll2(){
  let multiplyAll2 = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplyAll2 *= numbers[i];
  }
  return multiplyAll2
}

//- 배열에 있는 모든 숫자의 평균을 구해주는 함수를 만들어라.
function average(){
  let average = sumFunction() / numbers.length;
  return average
}

console.log(sumFunction()); // 출력값 : 394
console.log(multiplyAll2()); // 출력값 : 2715840000
console.log(average()); // 출력값 : 78.8