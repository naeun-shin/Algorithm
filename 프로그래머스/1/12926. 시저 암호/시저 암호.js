function solution(s, n) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    let array = s[i];
    if (array.match(/[a-zA-Z]/)) {
      let code = s.charCodeAt(i);
      let start = code <= 90 ? 65 : 97;
      answer += String.fromCharCode(((code - start + n) % 26) + start);
    } else {
      answer += array;
    }
  }
  return answer;
}