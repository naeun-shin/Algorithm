// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  let answer = [];
  let even = 0;
  let odd = 0;
  for (let i in num_list) {
    if (num_list[i] % 2 === 0) {
      even++;
    } else if (num_list[i] % 2 !== 0) {
      odd++;
    }
  }
  answer = [even, odd];
  return answer;
}

console.log(solution([1, 3, 5, 7]));
