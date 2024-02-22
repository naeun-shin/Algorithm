function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i); // 2,4,6,8,10
    }
    return answer;
}