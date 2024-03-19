function solution(strings, n) {
  let answer = [];
  for (const i in strings) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings.sort();
  for (const j in strings) {
    strings[j] = strings[j].replace(strings[j][0], '');
    answer.push(strings[j]);
  }

  return answer;
}