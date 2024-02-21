// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = (numbers.reduce((a, c) => a + c, 0) / numbers.length).toFixed(1);
  return answer;
}

console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));
