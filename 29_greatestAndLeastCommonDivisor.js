// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// 최대 공약수 : 두 수 A와 B의 공통된 약수 중에 가장 큰 정수
/**
유클리드 호제법을 이용한 풀이 

- a,b 를 서로 나눌때, 나누어진다면 b가 최대 공약수 이다. (a>b)

- 만약 a,b가 나누어지지 않으면 b와 a를 b로 나눈 나머지를 다시 나눈다

- 서로가 나누어지면 a%b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 a를 b를 나눈 나머지를 다시 나눈다.
 */
// 최소 공배수 : 두 수 A와 B의 공통된 약수 중에 가장 작은 정수

function solution(n, m) {
  var answer = [];
  // 최대 공약수 구하기
  let gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };
  //최소 공배수 구하기
  let lcm = (a, b) => (a * b) / gcd(a, b);
  answer.push(gcd(n, m), lcm(n, m));

  return answer;
}

console.log(solution(3, 12));

// 다른 사람 풀이 => 해석 요망
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
 