function solution(n, m) {
  var answer = [];
  let gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  let lcm = (a, b) => (a * b) / gcd(a, b);
  answer.push(gcd(n, m), lcm(n, m));

  return answer;
}