function solution(numbers) {
  let answer = 0;
  let first = Math.max.apply(null, numbers); // 최댓값 찾기
  numbers[numbers.indexOf(first)] = 0; // 배열의 최댓값 인덱스를 찾아서 0으로 바꿔주기 -> 2번째 최댓값을 찾기위한 처리
  let second = Math.max.apply(null, numbers); // 두번째 최댓값 찾기
  answer = first * second; // 정답에 곱해주기
  return answer;
}
