function solution(n)
{
  return (answer = String(n)
    .split('')
    .map((n) => Number(n))
    .reduce((a, c) => a + c, 0));
}