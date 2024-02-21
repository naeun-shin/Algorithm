function solution(message) {
  let answer = message.length * 2;
  return answer;
}

console.log(solution("I love you~"));

// 다른 사람 풀이

function solution(message) {
  var answer = [...message].length * 2;
  return answer;
}
// -> 질문 : 스프레드 문법을 사용하는게 더 나은지?
//          굳이, length로 string의 길이를 알 수 있는데, 배열의 스프레드로 쓰면 더 빠른 속도로 실행되는지?
// 스프레드 문법 -> 한번에 다 풀때 -> 문법 사용 시 가장 마지막에 나머지를 써야한다
