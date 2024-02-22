function solution(x) {
  var answer = true;
  let sum = x.toString().split('').map(Number).reduce((a, c) => a + c);
  return (answer = true ? x % sum == 0 : x % sum != 0);
}