// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

// n	result
// 20	   6
// 100	   9 
// 
function solution(n) {
  let answer = 0;
  let tmp = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      tmp.push(i);
    }
  }
  answer = tmp.length;
  return answer;
}

console.log(solution(20));

// 다른 사람 풀이
// function solution(n) {
//   let ans = 0;
//   for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

//   return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
// }

// 재훈 오답
function solution(n) {
  let answer = 0
  for (let i = 1; i = n; i++){ 
      if (n%i===0
      ){ answer =+ 1;
      }
  }
  return answer;
}

//인영
function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++){
      if(n % i === 0){
          answer = answer + 1
      }
  }
  return answer;
}


// 성희 (조금 다르네용)

function solution(n) {
  let count = 0;
  for(i=1 ; i <= n; i++){
      if(n % i === 0){
          count++;
      }
} return count;
}
