// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  return numbers.map((e) => e * 2)
}

console.log(solution([1, 2, 100, -99, 1, 2, 3]));

// 또 다른 풀이 -> reduce 사용
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
