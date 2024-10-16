function solution(rsp) {
    return rsp.replace(/./g, (e) => (e === '2' ? '0' : e === '0' ? '5' : '2'));
}