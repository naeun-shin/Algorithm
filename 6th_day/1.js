// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
// 성희도 완전똑같이 풀었어요
function solution(n) {
  return n
    .toString()
    .split("")
    .map((e) => parseInt(e))
    .reduce((a, b) => a + b, 0);
}

console.log(solution(1234));


function solution(n) {
  let answer =
  Math.floor(n / (10 ** 6)) + (Math.floor(n / (10 ** 5)) - 10 * Math.floor(n / (10 ** 6))) +
  Math.floor(n / (10 ** 4)) - 10 * Math.floor(n / (10 ** 5)) +
  Math.floor(n / (10 ** 3)) - 10 * Math.floor(n / (10 ** 4)) +
  Math.floor(n / (10 ** 2)) - 10 * Math.floor(n / (10 ** 3)) +
  Math.floor(n / (10 ** 1)) - 10 * Math.floor(n / (10 ** 2)) +
  Math.floor(n / (10 ** 0)) - 10 * Math.floor(n / (10 ** 1)) 

  return answer;
}

// 1의자리 10의자리 100의자리 더하는 로직....
//제한사하이 100만까지이길래 만약에 무한대로 커졌으면 저거 못써요....ㅋㅋㅋㅋㅋ
 // ㅋㅋㅋㅋㅋ 
// 안녕하세요 ! 인영님!
// ㅋㅋㅋㅋㅋ
function solution(n) {
  let answer = 0;
  let a = n.toString().split('');
  let b = a.map(Number)
  for(let i = 0; i < b.length; i++){
      answer += b[i];

  }
              
  return answer;
}