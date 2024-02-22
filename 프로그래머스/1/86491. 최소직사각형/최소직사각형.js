function solution(sizes) {
  let x = y = Number.MIN_SAFE_INTEGER;
  sizes
    .map((v) => v.sort((a, b) => a - b))
    .map((v) => {
      x = Math.max(x, v[0])
      y = Math.max(y, v[1])
    })
    return x * y;
}