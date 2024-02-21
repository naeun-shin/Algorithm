// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
function solution(s) {
  var answer = true;
  let pattern2 = /[a-zA-Z]/; //영어
  if (s.split('').length === 4 || s.split('').length === 6) {
    pattern2.test(s) ? (answer = false) : (answer = true);
  } else {
    answer = false;
  }
  return answer;
}

console.log(solution('1234'));

// 다른 사람 코드
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
