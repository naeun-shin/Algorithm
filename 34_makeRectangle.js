// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다.
// 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다.
// 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다.
// 하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 이때의 지갑 크기는 4000(=80 x 50)입니다.

// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다.
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요.

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

function solution(sizes) {
  let x = (y = Number.MIN_SAFE_INTEGER);
  sizes
    .map((v) => v.sort((a, b) => a - b))
    .map((v) => {
      x = Math.max(x, v[0]);
      y = Math.max(y, v[1]);
    });
  return x * y;
}

// // 다른 사람 풀이
// function solution(sizes) {
//   const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

//   let maxSize = [0, 0];
//   rotated.forEach(([w, h]) => {
//     if (w > maxSize[0]) maxSize[0] = w;
//     if (h > maxSize[1]) maxSize[1] = h;
//   });
//   return maxSize[0] * maxSize[1];
// }

// function solution(sizes) {
//   let c = [];
//   let d = [];
//   for (let i = 0; i < sizes.length; i++) {
//     if (sizes[i][0] > sizes[i][1]) {
//       c.push(d[i][0]);
//       d.push(d[i][1]);
//     } else {
//       c.push(d[i][1]);
//       d.push(d[i][0]);
//     }
//   }
//   c.sort(function (a, b) {
//     return a - b;
//   });
//   d.sort(function (a, b) {
//     return a - b;
//   });
//   return c.pop() * d.pop();
// }
