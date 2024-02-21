// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
  // let answer = s1.filter((e) => s2.includes(e)).length;
  return s1.filter((e) => s2.includes(e)).length;
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));

// filter => 이중반복으로 도는 함수 => 성능 이슈 생김
// Array.prototype.includes method when an array has a length equal to a set's size.