function solution(price, money, count) {
  let answer = 0;
  
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  
  let remainingMoney = money - answer;
  
  if (remainingMoney < 0) {
    return Math.abs(remainingMoney);
  }
  
  return 0;
}
