function solution(arr, divisor) {
  var answer = [];
  const tmp = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);

  answer = tmp.length !== 0 ? tmp : [-1];
  return answer;
}