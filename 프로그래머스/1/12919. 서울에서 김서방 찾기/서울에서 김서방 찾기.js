function solution(seoul) {
  let index = 0;
  for (const i in seoul) {
    if (seoul[i] === 'Kim') {
      index = seoul.indexOf('Kim');
    }
  }
  return `김서방은 ${index}에 있다`;
}