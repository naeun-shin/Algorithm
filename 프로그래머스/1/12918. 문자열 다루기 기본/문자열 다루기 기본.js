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