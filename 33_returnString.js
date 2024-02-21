// 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.
/**
 * 
    t	         p	      result
"3141592"	    "271"	    2
"500220839878"	"7"     	8
"10203"     	"15"	    3
 */

// 1. method 하나를 머리에 넣자 -> 자르는 메소드 split, splice, slice 중 1개! -> slice -> 원본 배열을 유지해서 자르는 메소드
// 2. t,p가 문자열 (string) => 어떠한 형식으로 바꿔서 풀어야 수식(for문을 돌리거나 slice로 자르기 위한 소식)을 쓸 수 있음 => 배열,,,? set? map?
// t를 p의 숫자 갯수를 인덱스 번호 기준으로 자른다.
// 3141592 271
// 314 141 415 159 592 <= 271 = 2
/**
 *  slice 예시
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

 */

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (p >= value) count++;
  }
  return count;
}
//bbbbb 나이스
