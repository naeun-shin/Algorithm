//array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  // 1번
  const tmp = arr.filter((item) => item % divisor === 0).sort((a, b) => a - b);

  answer = tmp.length !== 0 ? tmp : [-1];

  // 2번
  for (const i in arr) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    } else if (answer.length === 0) {
      answer.push(-1);
    }
    answer.sort((a, b) => a - b);
  }

  return answer;
}

console.log(solution([3, 2, 6], 10));

// // 성능 테스트를 위한 함수
// function performanceTest(callback) {
//   const startTime = performance.now(); // 시작 시간 측정
//   callback(); // 테스트할 코드 실행
//   const endTime = performance.now(); // 종료 시간 측정
//   const executionTime = endTime - startTime; // 실행 시간 계산
//   console.log('Execution time:', executionTime, 'milliseconds');
// }

// // 1번 코드를 성능 테스트
// performanceTest(() => {
//   function solution1(arr, divisor) {
//     const answer = arr
//       .filter((item) => item % divisor === 0)
//       .sort((a, b) => a - b);
//     return answer.length > 0 ? answer : [-1];
//   }
//   const result1 = solution1([3, 2, 6], 10);
//   console.log(result1);
// });

// // 2번 코드를 성능 테스트
// performanceTest(() => {
//   function solution2(arr, divisor) {
//     const answer = [];
//     for (const i in arr) {
//       if (arr[i] % divisor === 0) {
//         answer.push(arr[i]);
//       } else if (answer.length === 0) {
//         answer.push(-1);
//       }
//       answer.sort((a, b) => a - b);
//     }
//     return answer;
//   }
//   const result2 = solution2([3, 2, 6], 10);
//   console.log(result2);
// });

// 결국 2번 코드가 더 빠른 성능을 보여주고 있음 => filter함수를 쓴다고 해서 성능이 좋다는건 아님.
