function solution(numbers) {
     return Array.from({ length: 9 }, (_, index) => index + 1).filter((x) => !numbers.includes(x)).reduce((a, c) => a + c);
}