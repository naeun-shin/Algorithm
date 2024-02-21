// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
//      strings         	n	        return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]

/*
**1) 입력으로 받아온 문자열의 ‘배열’을 정렬하는 문제입니다.**

우리의 과제는 정렬하는 로직을 구현하는 것 입니다.

**2) 정렬하는 로직을 구현하는 아이디어 입니다.**

1. 기본적으로 사전식 정렬입니다. 문자열 배열같은 경우 sort로 정렬이 가능합니다.
2. 그런데 인덱스에 해당하는 문자 순서로 정렬하고, 그 인덱스에 해당하는 문자가 같은 경우 사전식으로 정렬해주는 작업이 필요합니다.
3. 물론 성능적인 측면에서 더 좋은 방법이 있지만, 지금은 가장 쉬운 방법을 채택하려고 합니다.

**3) 결론적으로 아래와 같은 순서로 구현하시면 쉽습니다.**

1. 문자열 앞에 인덱스에 해당하는 문자를 붙인다
    1. ["sun", "bed", "car"], 1 이라면 → ["usun", "ebed", "acar"]
2. 사전순으로 정렬한다
    1. ["acar", "ebed", "usun"]
3. 정렬된 배열의 가장 앞 글자를 땐다
    1. ["car", "bed", "sun"]

**4) 위와 같은 방법으로 구현하셨다면, 성능적으로(시간복잡도 상) 개선을 해봐도 좋지만, 오늘 배운 배열의 메서드를 이용해서 1,2,3번의 로직을 구현하는 것을 연습해보시는걸 추천합니다 🙂**
*/

function solution(strings, n) {
  let answer = [];
  for (const i in strings) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings.sort();
  for (const j in strings) {
    strings[j] = strings[j].replace(strings[j][0], '');
    answer.push(strings[j]);
  }

  return answer;
}

console.log(solution(['sun', 'bed', 'car'], 1));
