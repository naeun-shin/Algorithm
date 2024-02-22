function solution(numbers) {
    let answer = (numbers.reduce((a, c) => a + c, 0) / numbers.length).toFixed(1);
    return answer;
}