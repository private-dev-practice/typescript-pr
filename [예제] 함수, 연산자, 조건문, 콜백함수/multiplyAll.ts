const multiplyAll = (a: number, b: number) => {
  let large = (a>=b) ? a : b
  let small = (a<=b) ? a : b
  let result = 1
  for (let i = small; i <= large; i++) {
    result = result*i
  }
  console.log(`${a}부터 ${b}까지 모두 곱하면 ${result}입니다.`)
}
multiplyAll(1, 10);
multiplyAll(5, 7);

// 1부터 10까지 모두 곱하면 3628800입니다.
// 5부터 7까지 모두 곱하면 210입니다.