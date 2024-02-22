function solution(arr) {
  let minValue = Math.min(...arr);
  let answer = arr.filter((e) => e !== minValue);
  answer.length > 0 ? arr.filter((e) => e !== minValue) : [-1];

  return answer.length > 0 ? arr.filter((e) => e !== minValue) : [-1];
}