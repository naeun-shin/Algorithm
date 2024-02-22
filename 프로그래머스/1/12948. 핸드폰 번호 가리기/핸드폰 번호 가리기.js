function solution(phone_number) {
  let tmp = phone_number.split('').slice(0, -4);
  for (const i in tmp) {
    tmp[i] = '*';
  }
  let tmp2 = phone_number.split('').slice(-4);
  return (tmp + tmp2).split(',').join('');
}