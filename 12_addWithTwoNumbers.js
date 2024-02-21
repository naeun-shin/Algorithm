// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

/**
 * 
a	b	return
3	5	12
3	3	3
5	3	12
 */

// else if 문 사용
// max 메소드 사용 min 사용
// for 문
// 변수 선언 => method를 사용해서

// function solution(a, b) {
//   let answer = 0; // var쓰지 맙시다 ㅎ
//   const minValue = Math.min(a, b);
//   const maxValue = Math.max(a, b);
//   for (let i = minValue; i <= maxValue; i++) {
//     answer += i;
//   }
//   return answer;
// }
console.log(solution(5, 3));
// for문 익숙해지기!
// for문 익숙해지고 나머지 반복문

// for(여기에 들어갈 코드는 시작점; 여기는 조건문; 여기는 i의 상태변환)

// // 다른 사람 풀이
// function adder(a, b) {
//   var result = 0;
//   //함수를 완성하세요
//   return ((a + b) * (Math.abs(a - b) + 1)) / 2;
// }

function solution(a, b) {
  let answer = [a, b];
  let [c, d] = answer.sort();
  if (c === d) {
    return c;
  } else {
    for (let i = c; i < d; i++) {
      c = c + i + 1;
    }
    return c;
  }
}
