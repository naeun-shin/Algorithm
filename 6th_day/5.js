// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// my_string.split("").map(Number).filter((e) => !isNaN(e));

function solution(my_string) {
  //   let answer = [];
  //   let tmp = my_string
  //     .split("")
  //     .map(Number)
  //     .filter((e) => !isNaN(e))
  //     .sort();
  return my_string
    .split("")
    .map(Number)
    .filter((e) => !isNaN(e))
    .sort();
}

console.log(solution("p2o4i8gj2"));


// 성희 (나은님과 같음 = 04번 문제와 똑같이 풀었습니당당)
//.filter(num => !isNaN(num)) 이부분을 처음에 -> num => num != NaN 이라고 썻었는데 오류가 났었어요. 마자용

function solution(my_string) {
  return my_string.split('').map(Number).filter(num => !isNaN(num)).sort((a,b) => a-b);
}

//짝짝짝 굿잡
//굿굿~~~~~~~~~~~~~~~~ 맞아요 장족의 발전!!!
// 모두들 짝짝짞..... 
// 괜찮습니다 매서드(filter, reduce, map) 계속 연습하면 더 쉽게 풀수 있을거 같아요!! 
//홀리 홀리 홀릴리..... 
// see you~~~
//인영 => map(Number)를 쓰면 해결
function solution(my_string) {
  let my_array = my_string.split("")
  let array = my_array.filter(function(number) {
  return number % 1 === 0;
  }).map(Number)
  let answer = array.sort(function(a, b) {
      return a - b;
  });
  return answer;
}

console.log(solution("p2o4i8gj2"))

// 인영님 할 수 있어요~