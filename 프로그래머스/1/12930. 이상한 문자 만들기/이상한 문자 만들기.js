function solution(s) {
  var answer = '';
  let words = s.split(' '); 
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      answer += j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
    }
    if (i !== words.length - 1) {
      answer += ' ';
    }
  }
  return answer;
}