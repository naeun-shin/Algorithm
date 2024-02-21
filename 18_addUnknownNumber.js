// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  // var answer = -1;
  // const answer = Array.from({ length: 9 }, (_, index) => index + 1)
  //   .filter((x) => !numbers.includes(x))
  //   .reduce((a, c) => a + c);
  return Array.from({ length: 9 }, (_, index) => index + 1)
    .filter((x) => !numbers.includes(x))
    .reduce((a, c) => a + c);
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));

// 다른 사람 풀이 -> 전체 합으로 계산해서 reduce 함수 사용
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
