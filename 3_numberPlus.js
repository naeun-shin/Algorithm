// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  var answer = 0;
  // const str = String(n);
  // let mapfn = (n) => Number(n);
  // const tmp = str.split('').map(mapfn);

  return (answer = String(n)
    .split('')
    .map((n) => Number(n))
    .reduce((a, c) => a + c, 0));
}

console.log(solution(123));

// 다른 사람 풀이
function solution(n) {
  // 쉬운방법
  return (n + '').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}
