// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 짝수번쩨 => 대문자 / 홀수번째 => 소문자
// 1. 문자열 자르고 배열에 담기
// 2. 짝수 or 홀수 구분 해서 정규식대문자 소문자 치환하기
// 3. 배열 내 값 출력
function solution(s) {
  var answer = '';
  let words = s.split(' '); // 단어로 분리된 배열

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      answer += j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
    }

    if (i !== words.length - 1) {
      // 마지막 단어가 아니면 공백 추가
      answer += ' ';
    }
  }
  return answer;
}

console.log(solution('try hello world'));

// 다른 사람 코드
function toWeirdCase(s) {
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
