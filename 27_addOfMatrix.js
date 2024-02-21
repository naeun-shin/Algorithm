// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
// 실행한 결괏값 [[4,null],[6,null]]이 기댓값 [[4],[6]]과 다릅니다.
// [[1],[2]]	[[3],[4]]

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let tmp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      // arr1[i]
      tmp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tmp);
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [[3], [4]]
  )
);

// 다른 사람 풀이
function sumMatrix(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}
