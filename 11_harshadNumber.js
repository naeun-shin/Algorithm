// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 주어진 진법에서 그 수의 각 자릿수 숫자의 합으로 나누어떨어지는 자연수
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수

function solution(x) {
  var answer = true;
  let sum = x
    .toString()
    .split('')
    .map(Number)
    .reduce((a, c) => a + c);
  return (answer = true ? x % sum == 0 : x % sum != 0);
}

console.log(solution(10));
