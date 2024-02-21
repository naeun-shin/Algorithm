// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 3진법 숫자를 저장한 배열, 최종값을 반환할 변수, 자릿수의 값을 저장할 변수를 선언한다.
// 입력된 10진수를 3진법의 수로 변환한다. 해당 3진법의 수는 배열에 저장한다.
// 변환된 3진법 배열을 뒤집는다.
// 변환된 3진법 배열을 다시 10진수로 변환한다.
// 최종 변환된 10진수의 값을 최종 반환한다.
function solution(n) {
  var answer = 0;
  let ternaryArray = [];
  while (n > 0) {
    ternaryArray.push(n % 3);
    n = Math.floor((n /= 3));
  }
  ternaryArray.reverse();
  for (let i = 0; i < ternaryArray.length; i++) {
    answer += ternaryArray[i] * Math.pow(3, i);
  }

  return answer;
}

console.log(solution(125));

let arr = new Array();

let obj = new Object();
obj.hasOwnProperty