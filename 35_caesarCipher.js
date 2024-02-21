// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
/**
 * 1. for Of 쓰기
 * 2. 아스키코드로 문자비교 (for of) => 대문자 또는 소문자
 * 3. if절에서 비교한 값이 같으면 n값만큼 플러스한 문자열을 반환
 */

// function solution(s, n) {
//   var answer = '';
//   let inputArray = s.split('');
//   const smallCase = 'a'.charCodeAt(0); // 'a'의 유니코드 값
//   let tmp = '';
//   for (const i of inputArray) {
//     if (97 <= inputArray[i] <= 122) {
//       tmp = String.fromCharCode(smallCase + n);
//     } else if (65 <= inputArray[i] <= 90) {
//       tmp = String.fromCharCode(bigCase + n);
//     }
//     console.log(tmp);
//   }
//   return answer;
// }

function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let array = s[i];
    if (array.match(/[a-zA-Z]/)) {
      let code = s.charCodeAt(i);
      let start = code <= 90 ? 65 : 97;
      answer += String.fromCharCode(((code - start + n) % 26) + start);
    } else {
      answer += array;
    }
  }
  return answer;
}

console.log(solution('AB', 1));
