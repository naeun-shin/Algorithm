function solution(n) {
    var answer = 0;
    let ternaryArray = [];
    while (n > 0) {
        ternaryArray.push(n % 3);
        n = Math.floor((n /= 3));
    }
    ternaryArray.reverse();
    for (let i = 0; i < ternaryArray.length; i++) {
        answer += ternaryArray[i] * Math.pow(3, i);
    }
    return answer;
}