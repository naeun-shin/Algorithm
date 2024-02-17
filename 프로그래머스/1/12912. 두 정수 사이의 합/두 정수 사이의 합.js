function solution(a, b) {
  let answer = 0;
  const minValue = Math.min(a, b);
  const maxValue = Math.max(a, b);
  for (let i = minValue; i <= maxValue; i++) {
    answer += i;
  }
  return answer;
}