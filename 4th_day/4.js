//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수
// 배열을 return 하도록 solution 함수를 완성해보세요.

/*
numbers	        num1	num2	result
[1, 2, 3, 4, 5]	1	    3	    [2, 3, 4]
[1, 3, 5]	    1	    2	    [3, 5]
*/
function solution(numbers, num1, num2) {
  let answer = [];
  answer = numbers.slice(num1, num2 + 1); //어떤 배열의 begin 부터 end 까지(end 미포함)
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3));

// 코드 해석 필요
function solution(numbers, num1, num2) {
  return numbers.filter((n, i) => num1 <= i && i <= num2);
}

// slice & splice
// - return이 되느냐 안되느냐의 차이
// splice -> 자기 자신이 리턴
// slice -> 다른 변수에 할당해서 리턴

// splice 사용시 :numbers.splice(num1, num2 - num1 + 1)