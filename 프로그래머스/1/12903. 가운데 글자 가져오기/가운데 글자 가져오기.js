function solution(s) {
  var answer = '';
  let idx = s.split('').length;

  if (idx % 2 === 0) {
    let startIdx = s[Math.floor(idx / 2) - 1];
    let lastIdx = s[Math.floor(idx / 2)];
    answer = startIdx + lastIdx;
  } else {
    answer = s[Math.floor(idx / 2)];
  }
  return answer;
}