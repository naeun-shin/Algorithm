function solution(arr) {
  var answer = arr.reduce((a, c) => a + c, 0) / arr.length;
  //   answer = answer / arr.length;
  return answer;
}
console.log(solution([1, 2, 3, 4]));
