// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
function solution(n) {
  var answer = 0;
  let tmp = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      tmp.push(i);
    }
  }
  //   answer = tmp.reduce((a, c) => a + c, 0);
  return (answer = tmp.reduce((a, c) => a + c, 0));
}

console.log(solution(5));
