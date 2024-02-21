// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

/*
my_string	        result
"aAb1B2cC34oOp"	    10
"1a2b3c4d123"	    16
*/

// (my_string) {
//   // var answer = 0;
//   // let tmp = [];
//   // tmp = my_string.split("").map(Number);
//   let answer = my_string
//     .split("")
//     .map(Number)
//     .filter((e) => !isNaN(e))
//     .reduce((a, b) => a + b, 0);
//   // console.log(check);
//   return answer;
// }
console.log(solution("1a2b3c4d123"));

// Calls Number on each value in the array (casting it to a number) // and returns the array of results. [1,2,3,4]

// // 성희
// function solution(my_string) {
//   let array = [...my_string];
//   return array.map(Number).filter(element => !isNaN(element)).reduce((acc,num) => acc + num, 0);

// }
// 근데 어디 하시고 계신거에용?? 저 다르분들이 타이팅 하면 안보여서 소리만 들리고 어디서 타이핑 하시는지 ㅋㅋ 안보입니다

//
// 인영
function solution(my_string) {
  let my_array = my_string.split("");
  let array = my_array
    .filter(function (number) {
      return number % 1 === 0;
    })
    .map(Number);
  let answer = array.reduce((accumulator, current) => accumulator + current, 0);
  return answer;
}

//요기에요?? 안보여요/* 네!! 보입니당!
/*[
  '1', '2', '3',
  '4', '1', '2',
  '3'
]
*/
//
// 재훈
// [my_string.replace(/[^0-9]/g,'')]

// 정규식  : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_expressions

/*
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&은 일치한 문자열 전체를 의미
}
*/
//네에~~~~
