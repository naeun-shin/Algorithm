// 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

//한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// 학생들의 정수 번호 쌍 (-3, 0, 3), (-2, 0, 2), (-1, 0, 1), (-2, -1, 3), (-3, 1, 2) 이 삼총사가 될 수 있으므로, 5를 return 합니다.

// function solution(number) {
//   var answer = 0;

//   for (let i = 0; i <= number.length; i++) {
//     for (let j = i + 1; j <= number.length; j++) {
//       for (let k = j + 1; k <= number.length; k++) {
//         if (number[i] + number[j] + number[k] === 0) {
//           answer += 1;
//         }
//       }
//     }
//   }
//   return answer;
// }
console.log(solution([-2, 3, 0, 2, -5]));

// 삼중 for 문으로 각각의 인덱스를 검사한다.
// ** 중첩되는 for 문의 시작 위치를 잘 생각해 보세요  for(i = 0;, i < 1; i++)
// 각 인덱스를 더한 값이 0이면 answer에 1씩 더해준다.

// 지피티 님의 map 코드
// function solution(number) {
//   let answer = 0;

//   number.map((num, i) => {
//     number.slice(i + 1).map((num2, j) => {
//       number.slice(i + j + 2).map((num3) => {
//         if (num + num2 + num3 === 0) {
//           answer += 1;
//         }
//       });
//     });
//   });

//   return answer;
// }

// console.log(solution([-2, 3, 0, 2, -5]));

function solution(number) {
  const n = number.length;
  let count = 0;
  number.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = number[i] + number[left] + number[right];
      if (sum === 0) {
        count++;
        right--;
        if (left === right) {
          right = n - 1;
          left++;
        }
      } else {
        right--;
        if (left === right) {
          right = n - 1;
          left++;
        }
      }
    }
  }

  return count;
}
// 성능 테스트를 위한 함수
function performanceTest(callback) {
  const startTime = performance.now(); // 시작 시간 측정
  callback(); // 테스트할 코드 실행
  const endTime = performance.now(); // 종료 시간 측정
  const executionTime = endTime - startTime; // 실행 시간 계산
  console.log('Execution time:', executionTime, 'milliseconds');
}

// 1번 코드를 성능 테스트
performanceTest(() => {

});

// // 2번 코드를 성능 테스트
performanceTest(() => {

});