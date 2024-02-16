function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  if (answer > money) {
    answer = answer - money;
  } else if (answer - money == 0) {
    answer = 0;
  }
  return answer;
}