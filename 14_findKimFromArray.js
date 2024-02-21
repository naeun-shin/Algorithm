//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  let index = 0;
  for (const i in seoul) {
    if (seoul[i] === 'Kim') {
      index = seoul.indexOf('Kim');
    }
  }
  return `김서방은 ${index}에 있다`;
}

console.log(solution(['Jane', 'Taylor', 'Kim']));

// 다른 사람 풀이
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');

  return '김서방은 ' + idx + '에 있다';
}

// 2번
function findKim(seoul) {
  return '김서방은 ' + seoul.indexOf('Kim') + '에 있다';
}