function solution(n) {
  var answer = 0;
  let tmp = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      tmp.push(i);
    }
  }
  return (answer = tmp.reduce((a, c) => a + c, 0));
}